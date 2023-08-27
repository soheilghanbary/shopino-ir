"use client"

import { useCallback, useState } from "react"
import NextImage from "next/image"
import { useParams } from "next/navigation"
import { api } from "@/server/trpc/api"
import { FileWithPath, useDropzone } from "react-dropzone"
import { create } from "zustand"

import { tw } from "@/lib/tailwind-styled"
import { useUploadThing } from "@/lib/uploadthing"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Icons } from "../icons"
import { Button } from "../ui/button"

type OpenStore = {
  isOpen: boolean
  setOpen: () => void
  onOpen: () => void
}

type TImagesResponse = {
  key: string
  url: string
}

const useOpenStore = create<OpenStore>((set) => ({
  isOpen: false,
  setOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  onOpen: () => set({ isOpen: true }),
}))

const UploadContainer = tw.div`
  flex 
  h-48 
  cursor-pointer 
  flex-col 
  items-center 
  justify-center 
  gap-2 
  rounded-md 
  border border-dashed 
  text-center text-sm 
  text-muted-foreground 
  shadow-sm 
  hover:border-blue-400
`

const PreviewsStyled = tw.div`
  flex items-center gap-2
`

const PreviewImageContainer = tw.div`
  relative 
  h-20 w-20 
  rounded-md 
  bg-secondary
`

const PreviewImageStyled = tw(NextImage)`
  h-full 
  w-full 
  rounded-[inherit] 
  object-cover 
`

export function ProductMediaTab() {
  const { isOpen, setOpen, onOpen } = useOpenStore()
  return (
    <>
      <Button size={"sm"} className="mb-2" variant={"outline"} onClick={onOpen}>
        <Icons.upload />
        Upload Image
      </Button>
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Your Image Product</DialogTitle>
          </DialogHeader>
          <Uploader />
        </DialogContent>
      </Dialog>
    </>
  )
}

const Uploader = () => {
  const params = useParams() as { id: string }
  const [isLoading, setIsLoading] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles)
  }, [])

  const { getRootProps } = useDropzone({
    onDrop,
    accept: {},
  })

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      alert("uploaded successfully!")
    },
    onUploadError: () => {
      alert("error occurred while uploading")
    },
  })

  const updateProductImage = api.products.updateImageProducts.useMutation()

  const onSubmit = async () => {
    setIsLoading(true)
    const response = await startUpload(files)
    const images = response?.map((res) => ({
      key: res.key,
      url: res.url,
    })) as TImagesResponse[]
    await updateProductImage.mutateAsync({ id: params.id, images })
    setIsLoading(false)
  }

  return (
    <>
      <UploadContainer {...getRootProps()}>
        <Icons.image className="text-foreground" />
        <p>
          Drag your Product Image <br />
          MaxSize: 4MB
        </p>
      </UploadContainer>
      <Previews files={files} />
      <div className="grid grid-cols-2 gap-4">
        <Button
          size={"sm"}
          variant={"outline"}
          onClick={() => setFiles([])}
          disabled={!files.length || isLoading}
        >
          <Icons.trash />
          Remove All
        </Button>
        <Button
          size={"sm"}
          onClick={onSubmit}
          disabled={!files.length || isLoading}
        >
          {isLoading && <Icons.loader className="animate-spin" />}
          Upload Images
        </Button>
      </div>
    </>
  )
}

const Previews = ({ files }: { files: File[] }) => {
  if (!files.length) return null
  return (
    <PreviewsStyled>
      {files.map((file) => (
        <PreviewImage key={file.name} file={file} />
      ))}
    </PreviewsStyled>
  )
}

const PreviewImage = ({ file }: { file: File }) => {
  const path = URL.createObjectURL(file)
  return (
    <PreviewImageContainer>
      <PreviewImageStyled
        fill
        src={path}
        alt="uploader"
        loading="lazy"
        className=""
      />
    </PreviewImageContainer>
  )
}
