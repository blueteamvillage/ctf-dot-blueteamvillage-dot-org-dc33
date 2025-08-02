import { Suspense } from "react"
import { ContentEditor } from "@/components/content-editor"

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Content Management
          </h1>
          <p className="text-gray-400">Update website content using Markdown. Changes will be reflected immediately.</p>
        </div>

        <Suspense fallback={<div className="text-center py-8">Loading editor...</div>}>
          <ContentEditor />
        </Suspense>
      </div>
    </div>
  )
}
