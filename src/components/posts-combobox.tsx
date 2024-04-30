'use client'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'
import * as React from 'react'

import { Icons } from '@/components/icons'
import { Kbd } from '@/components/kbd'
import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Skeleton } from '@/components/ui/skeleton'
import { useDebounce } from '@/hooks/use-debounce'
import { getPostBySearch } from '@/lib/actions/post'
import { cn, isMacOs } from '@/lib/utils'
import { Post } from '@/types'

export function PostsCombobox() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState('')
  const debouncedQuery = useDebounce(query, 300)
  const [data, setData] = React.useState<Post[] | null>(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    if (debouncedQuery.length <= 0) {
      setData(null)
      return
    }

    async function fetchData() {
      setLoading(true)
      const { posts, error } = await getPostBySearch(debouncedQuery)

      if (error) {
        setLoading(false)
        return
      }
      setData(posts)
      setLoading(false)
    }

    fetchData()
  }, [debouncedQuery])

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const onSelect = React.useCallback((callback: () => unknown) => {
    setOpen(false)
    callback()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative size-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <MagnifyingGlassIcon className="size-4 xl:mr-2" aria-hidden="true" />
        <span className="hidden xl:inline-flex">Search posts...</span>
        <span className="sr-only">Search posts</span>
        <Kbd
          title={isMacOs() ? 'Command' : 'Control'}
          className="pointer-events-none absolute right-1.5 top-1.5 hidden xl:block"
        >
          {isMacOs() ? '⌘' : 'Ctrl'} K
        </Kbd>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={(open) => {
          setOpen(open)
          if (!open) {
            setQuery('')
          }
        }}
      >
        <CommandInput
          placeholder="Search posts..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty
            className={cn(loading ? 'hidden' : 'py-6 text-center text-sm')}
          >
            No posts found.
          </CommandEmpty>
          {loading ? (
            <div className="space-y-1 overflow-hidden px-1 py-2">
              <Skeleton className="h-4 w-10 rounded" />
              <Skeleton className="h-8 rounded-sm" />
              <Skeleton className="h-8 rounded-sm" />
            </div>
          ) : (
            data && (
              <CommandGroup className="capitalize" heading="Posts">
                {data?.map((post) => (
                  <CommandItem
                    key={post.title}
                    className="h-9"
                    value={post.title}
                    onSelect={() =>
                      onSelect(() =>
                        router.push(`/post/${post._id}?index=${post._id}`),
                      )
                    }
                  >
                    <Icons.product
                      className="mr-2.5 size-3 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <span className="truncate">{post.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
