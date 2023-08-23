import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"
import { PageHeader } from "@/components/page-header"

export default function ProductPage() {
  return (
    <div>
      <PageHeader title="Samsung S23 Ultra 256G RAM 16" description="" />
      <Tabs defaultValue="settings" className="max-w-md">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">
                Update Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label>Title</Label>
                <Input type="text" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label>Price</Label>
                  <Input type="text" />
                </div>
                <div className="space-y-1">
                  <Label>Category</Label>
                  <Input type="text" />
                </div>
              </div>
              <div className="space-y-1">
                <Label>Description</Label>
                <Textarea rows={6} />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Details</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="media">
          <Dialog>
            <DialogTrigger>
              <Button size={"sm"} variant={"outline"} className="mb-2">
                <Icons.upload className="mr-2 h-4 w-4" />
                Upload Image
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Your Image Product</DialogTitle>
              </DialogHeader>
              <MediaCard />
            </DialogContent>
          </Dialog>
          <div className="flex items-center gap-2">
            <div className="h-20 w-20 rounded-md bg-secondary"></div>
            <div className="h-20 w-20 rounded-md bg-secondary"></div>
            <div className="h-20 w-20 rounded-md bg-secondary"></div>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Delete Product</CardTitle>
              <CardDescription>
                are you sure for delete this product?
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant={"destructive"}>Delete Product</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const MediaCard = () => (
  <div className="flex h-48 cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-dashed text-center text-sm text-muted-foreground shadow-sm hover:border-blue-400">
    <Icons.image className="text-foreground" />
    <p>
      Drag your Product Image <br />
      MaxSize: 4MB
    </p>
  </div>
)
