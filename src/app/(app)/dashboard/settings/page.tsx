import { serverClient } from "@/server/trpc/serverClient"

import { UpdateUserForm } from "@/components/forms/update-user-form"
import { UpdateUserProfile } from "@/components/forms/update-user-profile"
import { PageHeader } from "@/components/page-header"

export default async function SettingsPage() {
  const getUser = await serverClient.users.getUser()
  return (
    <section className="max-w-md space-y-4">
      <PageHeader title="Settings" description="manage your account settings" />
      <UpdateUserProfile initialPath={getUser?.avatar!} />
      <UpdateUserForm {...getUser} />
    </section>
  )
}
