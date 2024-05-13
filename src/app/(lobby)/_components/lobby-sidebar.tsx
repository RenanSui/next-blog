import { Search } from '@/components/layouts/search'
import { cn } from '@/lib/utils'

type LobbySidebarProps = React.HTMLAttributes<HTMLElement>

export default function LobbySidebar({
  className,
  ...props
}: LobbySidebarProps) {
  return (
    <aside className={cn('h-screen w-full space-y-4', className)} {...props}>
      <div>
        <Search />
      </div>
      <div className="rounded-xl border border-border/60 p-4">
        <h1>Trending</h1>
      </div>
    </aside>
  )
}
