import { getPosts } from '@/lib/actions/post'
import * as React from 'react'
import { Lobby } from './_components/lobby'

export default async function IndexPage() {
  const postsPromise = getPosts()

  return (
    <React.Suspense fallback={<div>Aoba</div>}>
      <Lobby postsPromise={postsPromise} />
    </React.Suspense>
  )
}
