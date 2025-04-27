"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LanguageSelector } from "@/components/language-selector"
import { Send, Paperclip, MoreVertical, Volume2, VolumeX, RefreshCw } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function AiChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Initial greeting message
  useEffect(() => {
    // Simulate a bot welcome message after a short delay
    const timer = setTimeout(() => {
      setMessages([
        {
          role: "assistant",
          content: "Hi there! How are you feeling today? I'm here to listen and support you.",
          timestamp: new Date(),
        },
      ])
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: newMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")

    // Simulate AI thinking
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "I understand how you feel. Would you like to talk more about what's on your mind?",
        "Thank you for sharing that with me. It sounds like you're going through a challenging time.",
        "I'm here to listen. Could you tell me more about when you started feeling this way?",
        "That's completely valid. Many people experience similar feelings. What helps you feel better usually?",
        "I appreciate you opening up. Remember that your feelings are important and worthy of attention.",
      ]

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]

      const aiMessage: Message = {
        role: "assistant",
        content: randomResponse,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const toggleSpeech = () => {
    setIsSpeaking(!isSpeaking)
    // Implementation for text-to-speech would go here
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const startNewConversation = () => {
    setMessages([
      {
        role: "assistant",
        content: "Let's start fresh. How are you feeling right now?",
        timestamp: new Date(),
      },
    ])
  }

  return (
    <div className="container max-w-4xl py-8">
      <Card className="h-[calc(100vh-10rem)] flex flex-col overflow-hidden">
        <CardHeader className="border-b px-4 py-4 flex flex-row items-center justify-between space-y-0">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="AI Avatar" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">AITALKS Therapist</CardTitle>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-xs text-muted-foreground">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <Button variant="ghost" size="icon" onClick={startNewConversation} title="New conversation">
              <RefreshCw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleSpeech} title={isSpeaking ? "Mute" : "Speech"}>
              {isSpeaking ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" title="More options">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </div>
        </CardHeader>

        <ScrollArea className="flex-1 p-4 pt-6">
          <div className="space-y-6">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                  {message.role === "assistant" && (
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="AI Avatar" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  )}

                  <div className={`flex flex-col ${message.role === "user" ? "items-end" : ""}`}>
                    <div
                      className={`rounded-lg p-3 ${
                        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">{formatTime(message.timestamp)}</span>
                  </div>

                  {message.role === "user" && (
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User Avatar" />
                      <AvatarFallback>ME</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[80%]">
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="AI Avatar" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-4">
                    <div className="flex gap-1 items-center">
                      <div className="w-2 h-2 rounded-full bg-foreground/70 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-foreground/70 animate-pulse [animation-delay:0.2s]"></div>
                      <div className="w-2 h-2 rounded-full bg-foreground/70 animate-pulse [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <CardContent className="p-4 border-t">
          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="shrink-0">
              <Paperclip className="h-4 w-4" />
              <span className="sr-only">Attach file</span>
            </Button>
            <Textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="min-h-10 flex-1 resize-none"
              rows={1}
            />
            <Button size="icon" className="shrink-0" onClick={handleSendMessage} disabled={newMessage.trim() === ""}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Your conversations are private and encrypted. AITALKS is here to support, not to replace professional
            therapy.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
