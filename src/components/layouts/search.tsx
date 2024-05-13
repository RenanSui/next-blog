'use client'

import { cn } from '@/lib/utils'
import { SearchSchema, searchSchema } from '@/lib/validations/search'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

type SearchProps = Omit<React.ComponentPropsWithRef<'form'>, 'onSubmit'>

export function Search({ className, ...props }: SearchProps) {
  const router = useRouter()

  const form = useForm<SearchSchema>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchInput: '',
    },
  })

  const onSubmit = async (input: SearchSchema) => {
    router.push(`/post/search?searchInput=${input.searchInput}`)
  }

  return (
    <div>
      <Form {...form}>
        <form
          className={cn('grid w-full gap-4', className)}
          onSubmit={form.handleSubmit(onSubmit)}
          autoComplete="off"
          {...props}
        >
          <FormField
            control={form.control}
            name="searchInput"
            render={({ field }) => (
              <FormItem>
                <FormControl className="rounded-full">
                  <Input placeholder="Search" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
