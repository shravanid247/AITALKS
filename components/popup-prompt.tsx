"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function PopupPrompt() {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Show popup after 30 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 30000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsVisible(false)
      setIsClosing(false)
    }, 300)
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 max-w-sm transition-all duration-300 ${isClosing ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"}`}
    >
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary animate-pulse" />
              <h3 className="font-medium text-lg">Need someone to talk to?</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={handleClose} className="h-8 w-8">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <p className="mt-2 text-muted-foreground">I'm here for you 💬 Let's talk about how you're feeling today.</p>
          <Button asChild className="mt-4 w-full">
            <Link href="/ai-chat">Start Chatting</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
