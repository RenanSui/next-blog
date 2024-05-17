import { getPosts } from '@/lib/actions/post'
import { getMe } from '@/lib/actions/user'
import * as React from 'react'
import { Lobby } from './_components/lobby'
import { LobbySkeleton } from './_components/lobby-skeleton'

export default async function IndexPage() {
  const postsPromise = getPosts()
  const userPromise = getMe()

  return (
    <React.Suspense fallback={<LobbySkeleton />}>
      <Lobby postsPromise={postsPromise} userPromise={userPromise} />
    </React.Suspense>
  )
}
