import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full p-8 text-center bg-transparent shadow-none border-none">
        <div className="mb-8">
          {/* Large 404 Text */}
          <div className="flex justify-center">
            <img src="/images/logo-ace-foundation.png" alt="" className="h-20" />
          </div>
          <h1 className="text-3xl font-bold text-indigo-900 mb-4">Page coming soon...</h1>

        </div>

      </Card>
    </div>
  )
}
