import { getMe } from '@/lib/actions/user'
import { redirect } from 'next/navigation'

export default async function Page() {
  const user = await getMe()
  if (!user) redirect('/signin')

  redirect(`/profile/${user.username}`)
}
