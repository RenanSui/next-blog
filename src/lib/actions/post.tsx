import { Post } from '@/types'
import { unstable_cache as cache } from 'next/cache'

export async function getPosts() {
  return await cache(
    async () => {
      const response = await fetch(`${process.env.SERVER_URL}/blog/post`)
      const data = (await response.json()) as { data: Post[] }
      return data.data
    },
    ['blog-posts'],
    { revalidate: 24 * 60 * 60 * 1000, tags: ['blog-posts'] },
  )()
}

export async function getPostById(id: string) {
  const response = await fetch(`${process.env.SERVER_URL}/blog/post/id/${id}`)
  const data = (await response.json()) as { data: Post }
  return data.data
}

export async function getPostBySearch(searchInput: string) {
  const response = await fetch(`${process.env.SERVER_URL}/blog/post/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ searchInput }),
  })
  const data = (await response.json()) as { data: Post[] }
  return data.data
}
