"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Student",
    content:
      "AITALKS helped me manage my anxiety during finals. The emotional tracking feature showed me how my stress patterns changed, which was really eye-opening.",
  },
  {
    id: 2,
    name: "Michael T.",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Software Engineer",
    content:
      "As someone who works remote, I often felt isolated. The daily check-ins with the AI have become an important part of my routine and helped me recognize when I need more support.",
  },
  {
    id: 3,
    name: "Elena R.",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Healthcare Worker",
    content:
      "After difficult shifts, I needed someone to talk to at 3 AM. AITALKS was there when no one else could be. Later, they connected me with a therapist who specializes in healthcare worker burnout.",
  },
  {
    id: 4,
    name: "David K.",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Retired",
    content:
      "The multi-language support allowed me to express myself in my native language, which made all the difference. I feel truly understood for the first time in my therapy journey.",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)

  const nextTestimonial = () => {
    setDirection("right")
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setDirection(null)
    }, 300)
  }

  const prevTestimonial = () => {
    setDirection("left")
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
      setDirection(null)
    }, 300)
  }

  const slideClasses =
    direction === "left"
      ? "animate-[slideRight_0.3s_ease-in-out]"
      : direction === "right"
        ? "animate-[slideLeft_0.3s_ease-in-out]"
        : ""

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className={`${slideClasses}`}>
          <Card className="border-none shadow-none">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Quote className="text-primary h-12 w-12 absolute -top-6 -left-6 opacity-20" />
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage
                      src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                    />
                    <AvatarFallback>{testimonials[currentIndex].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <blockquote className="text-center mb-6">
                <p className="text-xl italic max-w-3xl mx-auto">"{testimonials[currentIndex].content}"</p>
              </blockquote>
              <div className="text-center">
                <p className="font-medium">{testimonials[currentIndex].name}</p>
                <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full p-0 ${currentIndex === index ? "bg-primary" : "bg-muted-foreground/30"}`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 -left-12 hidden md:flex"
        onClick={prevTestimonial}
      >
        <ChevronLeft className="h-8 w-8" />
        <span className="sr-only">Previous testimonial</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 -right-12 hidden md:flex"
        onClick={nextTestimonial}
      >
        <ChevronRight className="h-8 w-8" />
        <span className="sr-only">Next testimonial</span>
      </Button>
    </div>
  )
}
