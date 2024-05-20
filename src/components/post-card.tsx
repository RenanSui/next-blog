import { cn } from '@/lib/utils'

export const PostCard = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('border-b border-border', className)}>{children}</div>
)

export const PostCardHeader = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('', className)}>{children}</div>
)

export const PostCardContent = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('', className)}>{children}</div>
)
