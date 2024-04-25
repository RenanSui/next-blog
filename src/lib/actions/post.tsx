import { unstable_cache as cache } from 'next/cache'

type Post = {
  _id: string
  title: string
  body: string
  createdAt: Date
  updateAt: Date
}

export async function getPosts() {
  return await cache(
    async () => {
      const response = await fetch('http://localhost:8000/blog/post')
      const data = (await response.json()) as { data: Post[] }
      return data.data
    },
    ['blog-posts'],
    { revalidate: 24 * 60 * 60 * 1000, tags: ['blog-posts'] },
  )()
}

export async function getPostById(postId: string) {
  const response = await fetch(`http://localhost:8000/blog/post/id/${postId}`)
  const data = (await response.json()) as { data: Post }
  return data.data
}

export async function getPostBySearch(searchInput: string) {
  const response = await fetch(`http://localhost:8000/blog/post/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ searchInput }),
  })
  const data = (await response.json()) as { data: Post[] }
  return data.data
}
