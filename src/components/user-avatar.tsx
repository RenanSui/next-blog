import { getMe } from '@/lib/actions/user'
import { cn } from '@/lib/utils'
import * as React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type UserAvatarProps = React.HTMLAttributes<HTMLSpanElement> & {
  user?: Awaited<ReturnType<typeof getMe>>
}

export default function UserAvatar({ className, user }: UserAvatarProps) {
  const initials = `${user?.email.charAt(0)}`

  return user ? (
    <Avatar className={cn('size-8', className)}>
      <AvatarImage src={user.imageUrl} alt={user.username} />
      <AvatarFallback className="capitalize">{initials}</AvatarFallback>
    </Avatar>
  ) : null
}
