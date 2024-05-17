'use client'

import { usePathname } from 'next/navigation'

export function SearchShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return pathname.includes('search') ? null : <>{children}</>
}
