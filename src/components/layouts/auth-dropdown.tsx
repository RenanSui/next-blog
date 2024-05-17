import { ExitIcon, SunIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

import { Button, type ButtonProps } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { User } from '@/types'
import { Icons } from '../icons'
import { UserAvatar } from '../user-avatar'
import { ThemeToggle } from './theme-toggle'

interface AuthDropdownProps
  extends React.ComponentPropsWithRef<typeof DropdownMenuTrigger>,
    ButtonProps {
  user: User | null
}

export function AuthDropdown({ user, className, ...props }: AuthDropdownProps) {
  const email = `${user?.email}`

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="flex gap-3 outline-none hover:bg-muted/60 p-2 pr-8 rounded-full"
              {...props}
            >
              <UserAvatar user={user} className="size-11" />
              <div className="-space-y-1.5 flex flex-col">
                <span className="self-start">{user.name}</span>
                <span className="text-muted-foreground/50 self-start">
                  @{user.username}
                </span>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mx-8" align="center" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">
                  <Icons.avatar className="mr-2 size-4" aria-hidden="true" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">
                  <Icons.settings className="mr-2 size-4" aria-hidden="true" />
                  Settings
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <div className="flex px-2 items-center py-1.5 justify-between">
                <div className="flex items-center text-sm">
                  <SunIcon className="mr-2 size-4" aria-hidden="true" />
                  Theme
                </div>
                <ThemeToggle combobox />
              </div>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/signout">
                <ExitIcon className="mr-2 size-4" aria-hidden="true" />
                Log out
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button size="sm" className={cn(className)} {...props} asChild>
          <Link href="/signin">
            Sign In
            <span className="sr-only">Sign In</span>
          </Link>
        </Button>
      )}
    </>
  )
}
