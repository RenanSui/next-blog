'use client'

import { Icons } from '@/components/icons'
import { PasswordInput } from '@/components/password-input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { auth } from '@/lib/actions/auth'
import { authSchema } from '@/lib/validations/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

type Inputs = z.infer<typeof authSchema>

export default function SignInForm() {
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: Inputs) {
    setLoading(true)
    try {
      const { error, status } = await auth.signIn({ ...data })

      if (error && error?.message) {
        throw new Error(error?.message)
      }

      if (status && status !== 200) {
        throw new Error('User not found')
      }

      router.push(`${window.location.origin}/`)
    } catch (err) {
      toast.error(err as string)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="rodneymullen180@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage className="dark:text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage className="dark:text-red-500" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mt-2 bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-900/90"
          disabled={loading}
        >
          {loading && (
            <Icons.spinner
              className="mr-2 size-4 animate-spin text-white"
              aria-hidden="true"
            />
          )}
          Sign in
          <span className="sr-only">Sign in</span>
        </Button>
      </form>
    </Form>
  )
}
