import { HTTPResponse, Post } from '@/types'
import { unstable_cache as cache } from 'next/cache'

export async function getPosts() {
  return await cache(
    async () => {
      const response = await fetch(`${process.env.SERVER_URL}/blog/post`)
      const { data }: HTTPResponse<Post> = await response.json()
      return { data }
    },
    ['blog-posts'],
    { revalidate: 24 * 60 * 60 * 1000, tags: ['blog-posts'] },
  )()
}

export async function getPostById(id: string) {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/blog/post/id/${id}`)
    const { data, status }: HTTPResponse<Post> = await response.json()

    if (status && status !== 200) {
      throw new Error('No post were found')
    }

    return { post: data, error: null }
  } catch (err) {
    const error = err as Error
    return { post: null, error }
  }
}

export async function getPostBySearch(searchInput: string) {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/blog/post/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchInput }),
    })
    const { data, status }: HTTPResponse<Post[]> = await response.json()

    if (status && status !== 200) {
      throw new Error('No post were found')
    }

    return { posts: data, error: null }
  } catch (err) {
    const error = err as Error
    return { post: null, error }
  }
}
