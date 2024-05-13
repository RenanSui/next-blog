import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { User } from '@/types'
import Link from 'next/link'
import * as React from 'react'
import { Icons } from '../icons'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { ScrollArea } from '../ui/scroll-area'
import { SidebarNav } from './sidebar-nav'

type SiteSidebarProps = React.HTMLAttributes<HTMLElement> & {
  user: User | null
}

export default function SiteSidebar({
  children,
  className,
  user,
  ...props
}: SiteSidebarProps) {
  const initials = `${user?.email.charAt(0)}`

  return (
    <aside className={cn('h-screen w-full', className)} {...props}>
      <div className="hidden h-[3.55rem] items-center border-border/60 lg:flex">
        <Link
          href="/"
          className="flex w-fit items-center font-heading tracking-wider text-foreground/90 transition-colors hover:text-foreground"
        >
          {user ? (
            <Avatar className="size-8">
              <AvatarFallback className="capitalize">{initials}</AvatarFallback>
            </Avatar>
          ) : (
            <Icons.menu aria-hidden="true" className="size-8" />
          )}
        </Link>
      </div>
      <div className="flex flex-col gap-2.5 pt-2 lg:pt-4">{children}</div>
      <ScrollArea className="h-[calc(100vh-8rem)] py-2.5">
        <SidebarNav items={siteConfig.mainNav} className="p-1 pt-4" />
      </ScrollArea>
    </aside>
  )
}
