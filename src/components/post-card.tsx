import { getUser } from '@/lib/actions/user'
import { cn } from '@/lib/utils'
import { Post } from '@/types'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type PostCardProps = {
  post: Post
}

export async function PostCard({ post }: PostCardProps) {
  const user = await getUser(post.userId)
  if (!user)
    return (
      <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    )

  const initials = `${user?.email.charAt(0)}`

  return (
    <Link
      className="border-b border-border px-6 py-4 flex gap-3"
      href={`/post/${post._id}`}
    >
      <div>
        <Avatar className={cn('size-11')}>
          <AvatarImage src={user.imageUrl} alt={user.username} />
          <AvatarFallback className="capitalize">{initials}</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <div className="space-x-2 flex items-center">
          <Link
            className="self-start hover:underline font-bold"
            href={`/profile/${user.username}/aoba`}
          >
            {user.name}
          </Link>
          <span className="text-muted-foreground/50 self-start">
            @{user.username}
          </span>
        </div>
        <p className="line-clamp-3 font-light">{post.body}</p>
      </div>
    </Link>
  )
}
