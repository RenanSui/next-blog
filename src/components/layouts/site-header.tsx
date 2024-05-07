import { User } from '@/types'
import Link from 'next/link'
import { Icons } from '../icons'
import { PostsCombobox } from '../posts-combobox'
import { AuthDropdown } from './auth-dropdown'

interface SiteHeaderProps {
  user: User | null
}

export const SiteHeader = ({ user }: SiteHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 flex border-b bg-white dark:bg-neutral-950">
      <div className="container flex h-16 items-center">
        <Link href="/" className="text-3xl font-medium">
          Blog
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <Link
              href="/new-story"
              className="text-xs font-medium flex items-center gap-2"
            >
              <Icons.pencil className="size-6" />
              Write
            </Link>
            <PostsCombobox />
            <AuthDropdown user={user} />
          </nav>
        </div>
      </div>
    </header>
  )
}
