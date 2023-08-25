"use client"

import { useCallback, useState } from "react"
import Image from "next/image"
import { api } from "@/server/trpc/api"
import { FileWithPath, useDropzone } from "react-dropzone"
import { toast } from "sonner"

import { tw } from "@/lib/tailwind-styled"
import { useUploadThing } from "@/lib/uploadthing"
import { cn } from "@/lib/utils"

import { Icons } from "../icons"
import { Button } from "../ui/button"

const Container = tw.div`flex items-center gap-4 rounded-lg border p-4 shadow-sm`
const Uploader = tw.div`relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-full border-2 border-dashed hover:border-blue-400`

type TProps = {
  initialPath: string
}

export function UpdateUserProfile({ initialPath }: TProps) {
  const [loading, setLoading] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles)
  }, [])

  const { getRootProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: {},
  })
  const apiContext = api.useContext()
  const updateAvatar = api.users.updateAvatar.useMutation({
    onSettled() {
      apiContext.users.getUser.invalidate()
      toast.success("Profile Updated!")
      setLoading(false)
    },
  })

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res: any) => updateAvatar.mutate(res[0].fileUrl),
    onUploadError: () => alert("error occurred while uploading"),
  })

  const onSubmit = () => {
    setLoading(true)
    startUpload(files)
  }

  return (
    <Container>
      <Uploader {...getRootProps()}>
        <Image
          fill
          src={files.length ? URL.createObjectURL(files[0]) : initialPath}
          alt="upload user avatar"
          className={cn(
            "h-full w-full rounded-[inherit] object-cover",
            files.length
              ? "z-10 brightness-100"
              : "-z-10 brightness-75 dark:brightness-50"
          )}
        />
        <Icons.image className="h-6 w-6 text-white/80" />
      </Uploader>
      <div className="space-y-2">
        <p className="text-sm">Upload your Profile Image</p>
        {files.length ? (
          <Button
            disabled={loading}
            onClick={onSubmit}
            size={"sm"}
            className="h-8 text-xs"
          >
            <Icons.upload className="mr-1.5 h-4 w-4" />
            Upload
          </Button>
        ) : null}
      </div>
    </Container>
  )
}
