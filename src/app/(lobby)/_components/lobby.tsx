import { PostCardSkeleton } from '@/components/post-card-skeleton'
import { PostFormShell } from '@/components/post-form-shell'
import { Shell } from '@/components/shell'
import { getPosts } from '@/lib/actions/post'
import { getMe } from '@/lib/actions/user'
import * as React from 'react'
import { PostCardLink } from './post-card-link'

type LobbyProps = {
  postsPromise: ReturnType<typeof getPosts>
  userPromise: ReturnType<typeof getMe>
}

export async function Lobby({ postsPromise, userPromise }: LobbyProps) {
  const user = await userPromise
  const { posts } = await postsPromise

  return (
    <Shell variant="sidebar" className="pt-0 md:py-0 gap-0">
      <PostFormShell user={user} />
      <section>
        <h1 className="sr-only">Posts</h1>
        <React.Suspense
          fallback={Array.from({ length: 7 }).map((_, i) => (
            <PostCardSkeleton key={i} />
          ))}
        >
          {posts?.map(async (post) => (
            <PostCardLink key={`post-${post._id}`} post={post} />
          ))}
        </React.Suspense>
      </section>
    </Shell>
  )
}
