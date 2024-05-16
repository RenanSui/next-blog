import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default async function SettingsPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Update your Profile</CardTitle>
          <CardDescription>Manage your Account settings</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  )
}
