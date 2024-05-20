import { Search } from '@/components/layouts/search'
import { PostCardSkeleton } from '@/components/post-card-skeleton'
import { Shell } from '@/components/shell'
import { getPostBySearch } from '@/lib/actions/post'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import * as React from 'react'
import { PostCardLink } from '../../_components/post-card-link'

export default async function Page({
  searchParams: { searchInput },
}: {
  searchParams: { searchInput: string }
}) {
  const { posts } = await getPostBySearch(searchInput)

  return (
    <Shell variant="sidebar" className="pt-0 md:py-0 gap-0">
      <div className="py-4 px-4 border-b border-border flex items-center space-x-4">
        <Link href="/" className="hover:bg-border/60 p-2 rounded-full">
          <ArrowLeftIcon className="size-5" />
        </Link>
        <Search className="w-full" searchInput={searchInput} />
      </div>
      <section>
        <h1 className="sr-only">Posts</h1>
        <React.Suspense
          fallback={Array.from({ length: 7 }).map((_, i) => (
            <PostCardSkeleton key={i} />
          ))}
        >
          {posts?.map((post) => {
            return <PostCardLink key={`post-${post._id}`} post={post} />
          })}
        </React.Suspense>
      </section>
    </Shell>
  )
}
