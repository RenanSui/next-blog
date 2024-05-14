'use client'

import { getUser } from '@/lib/actions/user'
import { cn } from '@/lib/utils'
import { CreatePostSchema, createPostSchema } from '@/lib/validations/post'
import { zodResolver } from '@hookform/resolvers/zod'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import UserAvatar from './user-avatar'

type PostShellProps = Omit<React.ComponentPropsWithRef<'form'>, 'onSubmit'> & {
  user: Awaited<ReturnType<typeof getUser>>
}

export default function PostShell({
  user,
  className,
  ...props
}: PostShellProps) {
  const inputBodyRef = React.useRef<HTMLDivElement>(null)

  const form = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      body: '',
    },
  })

  const onSubmit = (input: CreatePostSchema) => {
    console.log({ input })

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
                        'editableDiv2 border-transparent overflow-hidden focus-visible:ring-0 resize-none text-xl py-0 pt-2 font-serif text-muted-foreground cursor-text',
                      )}
                      contentEditable
                      data-placeholder="Tell your story..."
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

// <div className="border-b border-border w-full py-4 px-6 space-y-4 flex flex-col">
// <div className="flex gap-1 pb-2">
//  <UserAvatar user={user} className="size-11" />
// <div
//   className={cn(
//     'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring //disabled:cursor-not-allowed disabled:opacity-50',
//     'editableDiv2 border-transparent overflow-hidden focus-visible:ring-0 resize-none text-xl min-h-[0px] py-0 pt-2 font-serif text-muted-foreground cursor-text',
//   )}
// contentEditable = 'true'
//   data-placeholder="Tell your story..."
// ></div>
// </div>
// <Button className="w-fit rounded-full font-bold self-end">Post</Button>
// </div>
