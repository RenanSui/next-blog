import { cn } from '@/lib/utils'
import { User } from '@/types'
import Link from 'next/link'
import { Button } from '../ui/button'

interface SiteHeaderProps {
  user: User | null
  children: React.ReactNode
}

export function SiteHeader({ user, children }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
      <div className={cn('flex items-center px-6 pt-4')}>
        {children}
        <div className="flex flex-1 items-center justify-end space-x-4">
          {user ? null : (
            <Button size="sm" asChild>
              <Link href="/signin">
                Sign In
                <span className="sr-only">Sign In</span>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
