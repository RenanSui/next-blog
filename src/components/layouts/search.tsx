'use client'

import { cn } from '@/lib/utils'
import { SearchSchema, searchSchema } from '@/lib/validations/search'
import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
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
    <div className={cn('', className)}>
      <Form {...form}>
        <form
          className="grid w-full gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
          autoComplete="off"
          {...props}
        >
          <FormField
            control={form.control}
            name="searchInput"
            render={({ field }) => (
              <FormItem>
                <FormControl className="rounded-full border-none outline-none">
                  <div className="group flex bg-border focus-within:bg-transparent [border:1px_solid_#e4e4e7] dark:[border:1px_solid_#27272a] items-center px-4 py-1 cursor-text relative">
                    <MagnifyingGlassIcon className="size-5 text-foreground/30 absolute" />
                    <Input
                      placeholder="Search"
                      className="placeholder:text-foreground/30 border-none focus-visible:ring-0 pl-8"
                      {...field}
                    ></Input>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
