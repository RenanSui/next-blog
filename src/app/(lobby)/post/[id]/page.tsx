import { PostCardSkeleton } from '@/components/post-card-skeleton'
import { Shell } from '@/components/shell'
import { getPostById } from '@/lib/actions/post'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import { PostCardShell } from '../../_components/post-card-shell'

export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  const { post } = await getPostById(id)

  return (
    <Shell variant="sidebar" className="pt-0 md:py-0 gap-0">
      <Link className="pt-4 px-4 flex items-center space-x-4" href="/">
        <div className="hover:bg-border/60 p-2 rounded-full">
          <ArrowLeftIcon className="size-5" />
        </div>
        <span className="text-xl font-medium">Post</span>
      </Link>
      <section>
        <h1 className="sr-only">Posts</h1>
        <React.Suspense
          fallback={Array.from({ length: 7 }).map((_, i) => (
            <PostCardSkeleton key={i} />
          ))}
        >
          {post ? <PostCardShell post={post} /> : null}
        </React.Suspense>
      </section>
    </Shell>
  )
}
