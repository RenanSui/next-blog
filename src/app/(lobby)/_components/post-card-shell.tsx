import {
  PostCard,
  PostCardContent,
  PostCardHeader,
} from '@/components/post-card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getUser } from '@/lib/actions/user'
import { cn } from '@/lib/utils'
import { Post } from '@/types'
import Link from 'next/link'

type PostCardShellProps = {
  post: Post
}

export async function PostCardShell({ post }: PostCardShellProps) {
  const user = await getUser(post.userId)
  if (!user) return null

  const initials = `${user?.email.charAt(0)}`

  return (
    <PostCard key={`post-${post._id}`} className="relative space-y-2 px-6 py-4">
      <PostCardHeader className="flex gap-4">
        <Link href={`/profile/${user.username}`}>
          <Avatar className={cn('size-11')}>
            <AvatarImage src={user.imageUrl} alt={user.username} />
            <AvatarFallback className="capitalize">{initials}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex flex-col -space-y-1">
          <Link
            className="self-start hover:underline font-bold"
            href={`/profile/${user.username}`}
          >
            {user.name}
          </Link>
          <Link
            className="text-muted-foreground/50 self-start"
            href={`/profile/${user.username}`}
          >
            @{user.username}
          </Link>
        </div>
      </PostCardHeader>
      <PostCardContent>
        <p className="line-clamp-3 font-light w-full">{post.body}</p>
      </PostCardContent>
    </PostCard>
  )
}
