'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useMounted } from '@/hooks/use-mounted'
import { signOut } from '@/lib/actions/auth'
import { AuthErrorHandler } from '@/lib/handle-auth-error'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function SignoutButton() {
  const router = useRouter()
  const mounted = useMounted()

  return (
    <div className="flex w-full flex-col-reverse items-center gap-2 sm:flex-row">
      <Button
        variant="secondary"
        size="sm"
        className="w-full"
        onClick={() => router.back()}
      >
        Go back
        <span className="sr-only">Previous page</span>
      </Button>
      {mounted ? (
        <Button
          size="sm"
          className="w-full"
          onClick={async () => {
            try {
              const { status } = await signOut()
              AuthErrorHandler(status)
              router.push('/')
            } catch (error) {
              toast.error(error as string)
            }
          }}
        >
          Log out
          <span className="sr-only">Log out</span>
        </Button>
      ) : (
        <Skeleton
          className={cn(
            buttonVariants({ size: 'sm' }),
            'w-full bg-muted text-muted-foreground',
          )}
        >
          Log out
        </Skeleton>
      )}
    </div>
  )
}
