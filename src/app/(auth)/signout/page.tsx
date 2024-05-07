import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Shell } from '@/components/shell'
import { SignoutButton } from '../_components/signout-button'

export default async function Page() {
  // const user = await getUser()
  // if (!user) redirect('/signin')

  return (
    <Shell className="max-w-md bg-white lg:bg-transparent rounded-xl border">
      <PageHeader className="text-center">
        <PageHeaderHeading size="sm">Sign out</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Are you sure you want to sign out?
        </PageHeaderDescription>
      </PageHeader>
      <SignoutButton />
    </Shell>
  )
}
