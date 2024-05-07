import { SiteFooter } from '@/components/layouts/site-footer'
import { SiteHeader } from '@/components/layouts/site-header'
import { getUser } from '@/lib/actions/user'

export default async function NewStoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const user = await getUser()

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
