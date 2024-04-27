import { HTTPResponse, Post } from '@/types'

export async function getPosts() {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/blog/post`)
    const { data, status }: HTTPResponse<Post[]> = await response.json()

    if (status && status !== 200) {
      throw new Error('No post were found')
    }

    return { posts: data, error: null }
  } catch (err) {
    const error = err as Error
    return { posts: null, error }
  }
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
    return { posts: null, error }
  }
}
