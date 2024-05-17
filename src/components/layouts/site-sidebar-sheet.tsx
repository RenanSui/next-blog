'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button, type ButtonProps } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useSidebar } from '@/hooks/use-sidebar'
import { cn } from '@/lib/utils'
import { User } from '@/types'
import Link from 'next/link'
import { Icons } from '../icons'
import { UserAvatar } from '../user-avatar'

export type SiteSidebarSheetProps = ButtonProps & {
  user: User | null
}

export function SiteSidebarSheet({
  children,
  className,
  user,
  ...props
}: SiteSidebarSheetProps) {
  const { open, setOpen } = useSidebar()
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const initials = `${user?.email.charAt(0)}`
  // const email = `${user?.email}`

  if (isDesktop) return null

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'size-5 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0',
            className,
          )}
          {...props}
        >
          {user ? (
            <UserAvatar user={user} />
          ) : (
            <Icons.menu aria-hidden="true" className="size-8" />
          )}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="inset-y-0 flex h-auto w-[18.75rem] flex-col items-center gap-4 px-0 py-4"
      >
        <SheetClose asChild>
          <Link
            href="/"
            className="mx-6 flex items-center self-start font-heading tracking-wider text-foreground/90 transition-colors hover:text-foreground"
          >
            {user ? (
              <Avatar className="size-8">
                <AvatarFallback className="capitalize">
                  {initials}
                </AvatarFallback>
              </Avatar>
            ) : (
              <Icons.menu aria-hidden="true" className="size-8" />
            )}
          </Link>
        </SheetClose>
        {children}
      </SheetContent>
    </Sheet>
  )
}
