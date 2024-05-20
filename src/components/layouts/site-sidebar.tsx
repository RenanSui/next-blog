import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { User } from '@/types'
import Link from 'next/link'
import * as React from 'react'
import { Icons } from '../icons'
import { ScrollArea } from '../ui/scroll-area'
import { AuthDropdown } from './auth-dropdown'
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
  return (
    <aside className={cn('h-screen w-full', className)} {...props}>
      <div className="hidden h-[3.55rem] items-center border-border/60 lg:flex">
        <Link
          href="/"
          className="flex w-fit items-center font-heading tracking-wider hover:bg-red-500 transition-colors px-2 py-2 rounded-full"
        >
          <Icons.menu aria-hidden="true" className="size-9" />
        </Link>
      </div>
      <div className="flex flex-col gap-2.5 pt-2 lg:pt-4">{children}</div>
      <ScrollArea className="h-[calc(100vh-8.5rem)] py-2.5 px-4">
        <SidebarNav items={siteConfig.mainNav} className="pt-4" />
      </ScrollArea>
      <div className="px-4">
        <AuthDropdown user={user} />
      </div>
    </aside>
  )
}
