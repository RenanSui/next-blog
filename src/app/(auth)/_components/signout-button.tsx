'use client'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { signOut } from '@/lib/actions/auth'
import { AuthErrorHandler } from '@/lib/handle-auth-error'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { ButtonHTMLAttributes, useState } from 'react'
import { toast } from 'sonner'

export const SignoutButton = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  return (
    <Button
      disabled={isLoading}
      className={cn(
        'bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-900/90',
        className,
      )}
      variant="default"
      size="sm"
      onClick={async () => {
        setIsLoading(true)
        try {
          const { status } = await signOut()
          AuthErrorHandler(status)
          router.push(`${window.location.origin}/`)
        } catch (error) {
          toast.error(error as string)
        } finally {
          setIsLoading(false)
        }
      }}
      {...props}
    >
      {isLoading && (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin text-white" />
      )}
      {children}
    </Button>
  )
}
