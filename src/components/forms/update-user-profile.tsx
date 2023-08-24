"use client"

import { useCallback, useState } from "react"
import Image from "next/image"
import { useDropzone } from "react-dropzone"

import { Icons } from "../icons"
import { Button } from "../ui/button"

type TProps = {
  initialPath: string
}

export function UpdateUserProfile({ initialPath }: TProps) {
  const [files, setFiles] = useState<File[]>([])
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {},
  })

  return (
    <div className="flex items-center gap-4 rounded-lg border p-4 shadow-sm">
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed bg-secondary/30">
        <Image
          fill
          src={initialPath}
          alt="upload user avatar"
          className="-z-10 h-full w-full rounded-[inherit] object-cover brightness-50"
        />
        <Icons.image className="h-6 w-6 text-foreground/80" />
      </div>
      <div className="space-y-2">
        <p className="text-sm">Upload your Profile Image</p>
        <Button size={"sm"} className="h-8 text-xs">
          <Icons.upload className="mr-1.5 h-4 w-4" />
          Upload
        </Button>
      </div>
    </div>
  )
}
