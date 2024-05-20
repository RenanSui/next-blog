import { Search } from '@/components/layouts/search'
import { SiteHeader } from '@/components/layouts/site-header'
import { SiteNav } from '@/components/layouts/site-nav'
import SiteSidebar from '@/components/layouts/site-sidebar'
import { SiteSidebarSheet } from '@/components/layouts/site-sidebar-sheet'
import { SidebarProvider } from '@/hooks/use-sidebar'
import { getMe } from '@/lib/actions/user'
import { cn } from '@/lib/utils'
import { SearchShell } from './post/search/_components/search-shell'

type LobbyLayoutProps = {
  children: React.ReactNode
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  const user = await getMe()

  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full container lg:grid-cols-[17.5rem_1fr] ">
        <SiteSidebar
          className="top-0 z-30 hidden flex-col gap-4 border-r border-border/60 lg:sticky lg:block"
          user={user}
        />
        <div className="flex">
          <div className="flex flex-col w-full">
            <SiteHeader user={user}>
              <SiteSidebarSheet user={user}>
                <SiteSidebar user={user} />
              </SiteSidebarSheet>
            </SiteHeader>
            <main className="flex-1 overflow-hidden">{children}</main>
            <SiteNav />
          </div>
          <aside
            className={cn(
              'h-screen w-full space-y-4 top-0 max-w-[320px] p-4 z-30 hidden flex-col gap-4 border-l border-border/60 lg:sticky lg:block',
            )}
          >
            <SearchShell>
              <Search />
            </SearchShell>
            <div className="rounded-xl border border-border/60 p-4">
              <h1>Trending</h1>
            </div>
          </aside>
        </div>
      </div>
    </SidebarProvider>
  )
}
