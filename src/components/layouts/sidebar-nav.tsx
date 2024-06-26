'use client'

import { cn } from '@/lib/utils'
import type { SidebarNavItem } from '@/types'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Icons } from '../icons'
import { useSidebar } from '@/hooks/use-sidebar'

interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarNavItem[]
}

export const SidebarNav = ({ className, items, ...props }: SidebarNavProps) => {
  const { open, setOpen } = useSidebar()

  if (!items?.length) return null

  return (
    <div className={cn('flex w-full flex-col text-sm', className)} {...props}>
      {items.map((item, index) => {
        const Icon = item.icon ? Icons[item.icon] : ChevronLeftIcon

        return item.href ? (
          <Link
            aria-label={item.title}
            key={index}
            href={item.href}
            className={cn(item.disabled && 'pointer-events-none')}
            onClick={() => {
              if (open) setOpen(false)
            }}
          >
            <span
              className={cn(
                'group flex w-fit items-center border border-transparent p-2 hover:bg-muted hover:text-foreground gap-2 rounded-full',
                item.disabled && 'pointer-events-none opacity-60',
              )}
            >
              <Icon className="mr-2 size-8" aria-hidden="true" />
              <span>{item.title}</span>
            </span>
          </Link>
        ) : (
          <span
            key={index}
            className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
          >
            {item.title}
          </span>
        )
      })}
    </div>
  )
}
