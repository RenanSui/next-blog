import { cn } from '@/lib/utils'
import * as React from 'react'

export const Profile = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  )
}

export const ProfileHeader = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('', className)} {...props}>
      <div className="w-full h-[200px] bg-zinc-800" />
      <div className="w-full relative">{children}</div>
    </div>
  )
}

export const ProfileContent = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  )
}
