import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getMe } from '@/lib/actions/user'
import { AccountForm } from './_components/account-form'

export default async function SettingsPage() {
  const user = await getMe()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Update your Profile</CardTitle>
          <CardDescription>Manage your Account settings</CardDescription>
        </CardHeader>
        <CardContent>
          <AccountForm user={user} />
        </CardContent>
      </Card>
    </div>
  )
}
