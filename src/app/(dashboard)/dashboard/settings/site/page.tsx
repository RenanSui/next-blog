import { ThemeToggle } from '@/components/layouts/theme-toggle'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Page() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Site Preferences</CardTitle>
          <CardDescription>Manage your site preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex w-full flex-col gap-4">
            <div className="flex w-full items-center justify-between space-x-2 rounded-lg border p-4">
              <div className='className="space-y-0.5"'>
                <h1 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Change Color Theme
                </h1>
              </div>
              <ThemeToggle labelled />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
