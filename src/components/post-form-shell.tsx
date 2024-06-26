'use client'

import { createPost } from '@/lib/actions/post'
import { getMe } from '@/lib/actions/user'
import { cn } from '@/lib/utils'
import { CreatePostSchema, createPostSchema } from '@/lib/validations/post'
import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { UserAvatar } from './user-avatar'

type PostFormShellProps = Omit<
  React.ComponentPropsWithRef<'form'>,
  'onSubmit'
> & {
  user: Awaited<ReturnType<typeof getMe>>
}

export function PostFormShell({
  user,
  className,
  ...props
}: PostFormShellProps) {
  const inputBodyRef = React.useRef<HTMLDivElement>(null)

  const form = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      body: '',
    },
  })

  const onSubmit = (formData: CreatePostSchema) => {
    createPost(formData)

    if (inputBodyRef.current) inputBodyRef.current.textContent = ''
    form.setValue('body', '')
  }

  const onInput = (e: React.FormEvent<HTMLInputElement>) => {
    form.setValue('body', e.currentTarget.innerText)
  }

  return user ? (
    <div>
      <Form {...form}>
        <form
          className={cn(
            'grid w-full py-4 px-6 space-y-4 border-b border-border',
            className,
          )}
          onSubmit={form.handleSubmit(onSubmit)}
          autoComplete="off"
          {...props}
        >
          <FormField
            control={form.control}
            name="body"
            render={() => (
              <FormItem>
                <FormControl className="rounded-full">
                  <div className="flex gap-1">
                    <UserAvatar user={user} className="size-11" />
                    <div
                      onInput={onInput}
                      className={cn(
                        'flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring //disabled:cursor-not-allowed disabled:opacity-50',
                        'editableDiv2 border-transparent overflow-hidden focus-visible:ring-0 resize-none text-base py-0 pt-2 text-muted-foreground cursor-text',
                      )}
                      contentEditable
                      data-placeholder="Write your story..."
                      role="textbox"
                      ref={inputBodyRef}
                    ></div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="place-self-end w-fit rounded-full font-bold"
          >
            Post
          </Button>
        </form>
      </Form>
    </div>
  ) : null
}
