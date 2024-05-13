import { LobbyHeader } from '@/components/layouts/lobby-header'
import LobbySidebar from '@/components/layouts/lobby-sidebar'
import { LobbySidebarSheet } from '@/components/layouts/lobby-sidebar-sheet'
import { SidebarProvider } from '@/hooks/use-sidebar'
import { getUser } from '@/lib/actions/user'

export default async function LobbyLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getUser()

  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full container lg:grid-cols-[17.5rem_1fr]">
        <LobbySidebar
          className="top-0 z-30 hidden flex-col gap-4 border-r border-border/60 lg:sticky lg:block"
          user={user}
        />
        <div className="flex flex-col">
          <LobbyHeader user={user}>
            <LobbySidebarSheet user={user}>
              <LobbySidebar user={user} />
            </LobbySidebarSheet>
          </LobbyHeader>
          <main className="flex-1 overflow-hidden px-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
