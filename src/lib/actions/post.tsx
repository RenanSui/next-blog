'use server'

import { HTTPResponse, Post } from '@/types'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { z } from 'zod'
import { PostStatusCode } from '../handle-post-error'
import { createPostSchema } from '../validations/post'

export async function getPosts() {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/post`)
    const { data, status }: HTTPResponse<Post[], PostStatusCode> =
      await response.json()

    if (status && status !== 200) {
      throw new Error('No post were found')
    }

    const posts = data
      ?.sort((item1, item2) => {
        return (
          new Date(item1.createdAt).getTime() -
          new Date(item2.createdAt).getTime()
        )
      })
      .reverse()

    return { posts, error: null }
  } catch (err) {
    const error = err as Error
    return { posts: null, error }
  }
}

export async function getPostById(id: string) {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/post/id/${id}`)
    const { data, status }: HTTPResponse<Post, PostStatusCode> =
      await response.json()

    if (status && status !== 200) {
      throw new Error('No post were found')
    }

    return { post: data, error: null }
  } catch (err) {
    const error = err as Error
    return { post: null, error }
  }
}

export async function getPostByUserId(userId: string) {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/post/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    })
    const { data, status }: HTTPResponse<Post[], PostStatusCode> =
      await response.json()

    if (status && status !== 200) {
      throw new Error('No post were found')
    }

    return { posts: data, error: null }
  } catch (err) {
    const error = err as Error
    return { posts: null, error }
  }
}

export async function getPostBySearch(searchInput: string) {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/post/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchInput }),
    })
    const { data, status }: HTTPResponse<Post[], PostStatusCode> =
      await response.json()

    if (status && status !== 200) {
      throw new Error('No post were found')
    }

    return { posts: data, error: null }
  } catch (err) {
    const error = err as Error
    return { posts: null, error }
  }
}

type CreatePostFormData = z.infer<typeof createPostSchema>

export async function createPost(formData: CreatePostFormData) {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')?.value ?? ''

  try {
    const response = await fetch(`${process.env.SERVER_URL}/post/create`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ ...formData }),
    })

    const { status, message }: HTTPResponse<null, PostStatusCode> =
      await response.json()

    console.log({ message })

    if (status && status !== 200) {
      throw new Error('An error has occurred')
    }

    revalidatePath('/')
  } catch (error) {
    console.log({ error })
  }
}
