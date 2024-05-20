import { Post } from '@/types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export function isMacOs() {
  if (typeof window === 'undefined') return false

  return window.navigator.userAgent.includes('Mac')
}

export function sortPostsByDate(posts: Post[] | null) {
  return posts
    ?.sort((item1, item2) => {
      return (
        new Date(item1.createdAt).getTime() -
        new Date(item2.createdAt).getTime()
      )
    })
    .reverse()
}
