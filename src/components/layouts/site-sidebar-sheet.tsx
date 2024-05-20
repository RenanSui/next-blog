'use client'

import { type ButtonProps } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent } from '@/components/ui/sheet'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useSidebar } from '@/hooks/use-sidebar'
import { cn } from '@/lib/utils'
import { User } from '@/types'
import Link from 'next/link'
import { Icons } from '../icons'

export type SiteSidebarSheetProps = ButtonProps & {
  user: User | null
}

export function SiteSidebarSheet({
  children,
  className,
}: SiteSidebarSheetProps) {
  const { open, setOpen } = useSidebar()
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  if (isDesktop) return null

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="left"
        className={cn(
          'inset-y-0 flex h-auto w-[18.75rem] flex-col items-center gap-4 px-0 py-4',
          className,
        )}
      >
        <SheetClose asChild>
          <Link
            href="/"
            className="mx-6 flex items-center self-start font-heading tracking-wider text-foreground/90 transition-colors hover:text-foreground hover:bg-muted rounded-full"
          >
            <Icons.menu aria-hidden="true" className="size-6" />
          </Link>
        </SheetClose>
        {children}
      </SheetContent>
    </Sheet>
  )
}
