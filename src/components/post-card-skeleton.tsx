import { Skeleton } from './ui/skeleton'

export function PostCardSkeleton() {
  return (
    <div className="border-b border-border px-6 py-4 flex gap-3">
      <Skeleton className="size-11 rounded-full"></Skeleton>
      <div className="space-y-2 flex-1">
        <div className="space-x-2 flex items-center">
          <Skeleton className="h-4 w-16"></Skeleton>
          <Skeleton className="h-4 w-28"></Skeleton>
        </div>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
      </div>
    </div>
  )
}
