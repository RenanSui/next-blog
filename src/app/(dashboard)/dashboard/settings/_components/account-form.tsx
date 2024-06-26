'use client'

import { LoadingButton } from '@/components/loading-button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { updateProfile, updateUsername } from '@/lib/actions/user'
import { UserErrorHandler } from '@/lib/handle-user-error'
import { cn } from '@/lib/utils'
import { UpdateUserSchema, updateUserSchema } from '@/lib/validations/user'
import { User } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

type AccountFormProps = {
  user: User | null
}

export const AccountForm = ({ user }: AccountFormProps) => {
  const form = useForm<z.z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: user?.name ?? '',
      username: user?.username ?? '',
      imageUrl: user?.imageUrl ?? '',
    },
  })

  if (!user) return null

  const onSubmit = async (formData: UpdateUserSchema) => {
    const { username, ...formDataProps } = formData

    try {
      const { status } = await updateProfile(formDataProps)
      UserErrorHandler(status)
    } catch (err) {
      toast.error(err as string)
    }

    if (user.username !== username) {
      try {
        const { status } = await updateUsername({ username })
        UserErrorHandler(status)
      } catch (err) {
        toast.error(err as string)
      }
    }
  }

  const initials = `${user?.email.charAt(0)}`

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Name
                <Required />
              </FormLabel>
              <FormControl>
                <Input placeholder="Potato Head" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Username
                <Required />
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="potatoheadcoolemail"
                  {...field}
                  onChange={(event) => {
                    const { value } = event.target
                    form.setValue('username', value.replace(/\s+/g, ''))
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Image URL
                <Required />
              </FormLabel>
              <FormControl>
                <div className="space-y-2">
                  <Input placeholder="potatoheadcoolemail" {...field} />
                  <Avatar className={cn('size-11')}>
                    <AvatarImage src={field.value} alt="user image" />
                    <AvatarFallback className="capitalize">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingButton action="update">
          Update account
          <span className="sr-only">Update account</span>
        </LoadingButton>
      </form>
    </Form>
  )
}

const Required = () => <span className="text-red-500"> *</span>
