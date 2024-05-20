'use client'

import { siteConfig } from '@/config/site'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useSidebar } from '@/hooks/use-sidebar'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Icons } from '../icons'

export const SiteNav = () => {
  const { setOpen } = useSidebar()
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  if (isDesktop) return null

  return (
    <nav className="w-full bg-background border-t sticky bottom-0 lg:hidden z-20">
      <ul className="flex justify-around items-center">
        <li className="p-3 relative rounded-full hover:bg-border/60 cursor-pointer">
          <Icons.menu
            aria-hidden="true"
            className="size-8 text-bold"
            onClick={() => setOpen(true)}
          />
          <span className="sr-only">Toggle Menu</span>
        </li>

        {siteConfig.mainNav.map((nav) => {
          const Icon = nav.icon ? Icons[nav.icon] : ChevronLeftIcon
          return (
            <li
              key={`nav-${nav.title}`}
              className="relative rounded-full hover:bg-border/60"
            >
              <Link className="block p-3" href={nav.href}>
                <Icon className="size-8 text-bold" />
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
