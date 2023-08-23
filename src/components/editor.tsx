"use client"

import { BubbleMenu, EditorProvider, FloatingMenu } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

// define your extension array
const extensions = [StarterKit]

const content = "<p>Hello World!</p>"

const Tiptap = () => {
  return (
    <div className="min-h-[12rem] rounded-xl border p-4 shadow-sm">
      <EditorProvider
        extensions={extensions}
        content={content}
      ></EditorProvider>
    </div>
  )
}

export default Tiptap
