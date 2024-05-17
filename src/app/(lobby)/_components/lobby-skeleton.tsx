import { PostCardSkeleton } from '@/components/post-card-skeleton'
import { Shell } from '@/components/shell'
import { Skeleton } from '@/components/ui/skeleton'

export function LobbySkeleton() {
  return (
    <Shell variant="sidebar" className="pt-0 md:py-0 gap-0">
      <div className="grid w-full py-4 px-6 space-y-4 border-b border-border">
        <div className="flex gap-1">
          <Skeleton className="size-11 rounded-full"></Skeleton>
          <div>
            <Skeleton className="w-20 h-3 mt-4 ml-2"></Skeleton>
          </div>
        </div>
        <Skeleton className="place-self-end rounded-full h-10 w-16"></Skeleton>
      </div>
      <section>
        {Array.from({ length: 10 }).map((_, i) => (
          <PostCardSkeleton key={i} />
        ))}
      </section>
    </Shell>
  )
}
