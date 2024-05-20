import { PostCardSkeleton } from '@/components/post-card-skeleton'
import { Shell } from '@/components/shell'
import { UserAvatar } from '@/components/user-avatar'
import { getPostByUserId } from '@/lib/actions/post'
import { getUserByUsername } from '@/lib/actions/user'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import * as React from 'react'
import { PostCardLink } from '../../_components/post-card-link'
import { Profile, ProfileContent, ProfileHeader } from '../_components/profile'

export default async function Page({
  params: { username },
}: {
  params: { username: string }
}) {
  const user = await getUserByUsername(username)
  if (!user) return null

  const { posts } = await getPostByUserId(user._id)
  const createdAtDate = new Date(user.createdAt)
  const monthJoined = createdAtDate.toLocaleString('default', { month: 'long' })

  return (
    <Shell variant="main" className="pt-0 md:py-0 gap-0">
      <Link className="py-2 px-4 flex items-center space-x-4" href="/">
        <div className="hover:bg-border/60 p-2 rounded-full">
          <ArrowLeftIcon className="size-5" />
        </div>
        <span className="text-xl font-bold">{user.name}</span>
      </Link>
      <Profile className="space-y-8">
        <ProfileHeader>
          <UserAvatar
            className="rounded-full size-32 bg-black absolute -translate-y-1/2 left-4 border-4 border-white dark:border-black"
            user={user}
          />
          <div className="pt-20 flex flex-col -space-y-1 px-4">
            <span className="font-bold text-xl">{user.name}</span>
            <span className="text-muted-foreground/50">@{user.username}</span>
            <span className="flex gap-1 pt-3 text-muted-foreground/50">
              Joined {monthJoined} {createdAtDate.getFullYear()}
            </span>
          </div>
        </ProfileHeader>
        <ProfileContent className="border-t">
          <h1 className="sr-only">Posts</h1>
          <React.Suspense
            fallback={Array.from({ length: 7 }).map((_, i) => (
              <PostCardSkeleton key={i} />
            ))}
          >
            {posts?.map(async (post) => (
              <PostCardLink key={`post-${post._id}`} post={post} />
            ))}
          </React.Suspense>
        </ProfileContent>
      </Profile>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </Shell>
  )
}
