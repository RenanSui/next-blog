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
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className={cn('flex items-center px-6 h-14')}>
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
