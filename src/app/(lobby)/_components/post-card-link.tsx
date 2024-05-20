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

type PostCardLinkProps = {
  post: Post
}

export async function PostCardLink({ post }: PostCardLinkProps) {
  const user = await getUser(post.userId)
  if (!user) return null

  const initials = `${user?.email.charAt(0)}`

  return (
    <PostCard
      key={`post-${post._id}`}
      className="relative flex gap-4 px-6 py-4"
    >
      <Link className="absolute inset-0" href={`/post/${post._id}`} />
      <Link href={`/profile/${user.username}`}>
        <Avatar className={cn('size-11')}>
          <AvatarImage src={user.imageUrl} alt={user.username} />
          <AvatarFallback className="capitalize">{initials}</AvatarFallback>
        </Avatar>
      </Link>
      <div>
        <PostCardHeader className="relative z-10 space-x-2">
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
        </PostCardHeader>
        <PostCardContent>
          <p className="line-clamp-3 font-light w-full">{post.body}</p>
        </PostCardContent>
      </div>
    </PostCard>
  )
}
