import { PostCard } from '@/components/post-card'
import { PostCardSkeleton } from '@/components/post-card-skeleton'
import { Shell } from '@/components/shell'
import { getPostById } from '@/lib/actions/post'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

export default async function Page({
  params: { id },
}: {
  params: { id: string }
}) {
  const { post } = await getPostById(id)

  return (
    <Shell variant="sidebar" className="pt-0 md:py-0 gap-0">
      <Link
        className="py-4 px-4 border-b border-border flex items-center space-x-4"
        href="/"
      >
        <div className="hover:bg-border/60 p-2 rounded-full">
          <ArrowLeftIcon className="size-5" />
        </div>
        <span className="text-xl font-medium">Post</span>
      </Link>
      <section>
        <h1 className="sr-only">Posts</h1>
        <React.Suspense
          fallback={Array.from({ length: 10 }).map((_, i) => (
            <PostCardSkeleton key={i} />
          ))}
        >
          {post ? <PostCard post={post} /> : null}
        </React.Suspense>
      </section>
    </Shell>
  )
}
