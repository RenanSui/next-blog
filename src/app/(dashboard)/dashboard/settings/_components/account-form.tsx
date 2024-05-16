'use client'

import { LoadingButton } from '@/components/loading-button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { updateProfile } from '@/lib/actions/user'
import { UserErrorHandler } from '@/lib/handle-user-error'
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
    },
  })

  const onSubmit = async (formData: UpdateUserSchema) => {
    try {
      const { status } = await updateProfile(formData)
      UserErrorHandler(status)
    } catch (err) {
      toast.error(err as string)
    }
  }

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

        <LoadingButton action="update">
          Update account
          <span className="sr-only">Update account</span>
        </LoadingButton>
      </form>
    </Form>
  )
}

const Required = () => <span className="text-red-500"> *</span>
