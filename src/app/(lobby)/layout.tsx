import { SiteHeader } from '@/components/layouts/site-header'
import SiteSidebar from '@/components/layouts/site-sidebar'
import { SiteSidebarSheet } from '@/components/layouts/site-sidebar-sheet'
import { SidebarProvider } from '@/hooks/use-sidebar'
import { getMe } from '@/lib/actions/user'
import LobbySidebar from './_components/lobby-sidebar'

export default async function LobbyLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
          </div>
          <LobbySidebar className="top-0 max-w-[320px] p-4 z-30 hidden flex-col gap-4 border-l border-border/60 lg:sticky lg:block" />
        </div>
      </div>
    </SidebarProvider>
  )
}
