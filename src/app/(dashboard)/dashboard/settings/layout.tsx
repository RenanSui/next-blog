import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Shell } from '@/components/shell'
import { SettingsTabs } from './_components/settings-tabs'

type GroupLayoutProps = React.PropsWithChildren

export default function SettingsLayout({ children }: GroupLayoutProps) {
  return (
    <Shell variant="sidebar" className="">
      <PageHeader>
        <PageHeaderHeading size="sm">Settings</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Manage your settings
        </PageHeaderDescription>
      </PageHeader>
      <SettingsTabs />
      <div className="overflow-hidden">{children}</div>
    </Shell>
  )
}
