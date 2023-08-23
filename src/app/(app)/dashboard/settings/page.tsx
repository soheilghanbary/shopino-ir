import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"
import { PageHeader } from "@/components/page-header"

export default function SettingsPage() {
  return (
    <section className="max-w-md space-y-4">
      <PageHeader title="Settings" description="manage your account settings" />
      <div className="flex items-center gap-4 rounded-lg border p-4 shadow-sm">
        <div className="h-24 w-24 rounded-full border-2 border-dashed bg-secondary/30"></div>
        <div className="space-y-2">
          <p className="text-sm">Upload your Profile Image</p>
          <Button size={"sm"} className="h-8 text-xs">
            <Icons.upload className="mr-1.5 h-4 w-4" />
            Upload
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-1">
            <Label>Full Name</Label>
            <Input type="text" />
          </div>
          <div className="space-y-1">
            <Label>Website</Label>
            <Input type="text" />
          </div>
          <div className="space-y-1">
            <Label>Bio</Label>
            <Textarea rows={6} />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
