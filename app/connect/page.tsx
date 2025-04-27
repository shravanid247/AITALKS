"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, Star, Clock, MapPin, PhoneCall, Filter } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const therapists = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Anxiety & Depression",
    rating: 4.9,
    reviews: 127,
    image: "/placeholder.svg?height=400&width=400",
    languages: ["English", "Spanish"],
    nextAvailable: "Today",
    location: "Remote",
    bio: "With over 15 years of experience, I specialize in cognitive behavioral therapy for anxiety and depression. My approach is warm, collaborative, and focused on practical solutions.",
    price: "$120",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Trauma & PTSD",
    rating: 4.8,
    reviews: 89,
    image: "/placeholder.svg?height=400&width=400",
    languages: ["English", "Mandarin"],
    nextAvailable: "Tomorrow",
    location: "Remote",
    bio: "I help individuals heal from trauma using evidence-based approaches like EMDR and somatic experiencing. My practice is culturally informed and LGBTQ+ affirming.",
    price: "$135",
  },
  {
    id: 3,
    name: "Dr. Aisha Patel",
    specialty: "Relationship Issues",
    rating: 4.7,
    reviews: 105,
    image: "/placeholder.svg?height=400&width=400",
    languages: ["English", "Hindi", "Gujarati"],
    nextAvailable: "In 2 days",
    location: "Remote",
    bio: "I'm passionate about helping individuals and couples navigate relationship challenges. My approach draws from attachment theory and emotionally focused therapy.",
    price: "$110",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    specialty: "Stress Management",
    rating: 4.6,
    reviews: 78,
    image: "/placeholder.svg?height=400&width=400",
    languages: ["English"],
    nextAvailable: "Today",
    location: "Remote",
    bio: "I specialize in helping professionals manage stress and prevent burnout. My practical approach combines mindfulness techniques with cognitive strategies.",
    price: "$100",
  },
]

export default function ConnectPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [specialty, setSpecialty] = useState("all")
  const [selectedTherapist, setSelectedTherapist] = useState<number | null>(null)

  const filteredTherapists = therapists.filter((therapist) => {
    const matchesSearch =
      therapist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      therapist.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSpecialty = specialty === "all" || therapist.specialty.includes(specialty)
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Connect with Professional Therapists</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find licensed mental health professionals for personalized support
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or specialty..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select defaultValue="all" onValueChange={setSpecialty}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All specialties" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All specialties</SelectItem>
              <SelectItem value="Anxiety">Anxiety</SelectItem>
              <SelectItem value="Depression">Depression</SelectItem>
              <SelectItem value="Trauma">Trauma</SelectItem>
              <SelectItem value="Relationship">Relationship</SelectItem>
              <SelectItem value="Stress">Stress Management</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className={`grid grid-cols-1 lg:grid-cols-${selectedTherapist ? "2" : "1"} gap-6`}>
        <div className="space-y-6">
          {filteredTherapists.length > 0 ? (
            filteredTherapists.map((therapist) => (
              <Card
                key={therapist.id}
                className={`cursor-pointer transition-all ${selectedTherapist === therapist.id ? "border-primary" : "hover:border-primary/50"}`}
                onClick={() => setSelectedTherapist(therapist.id)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <Avatar className="h-24 w-24 rounded-lg">
                      <AvatarImage src={therapist.image || "/placeholder.svg"} alt={therapist.name} />
                      <AvatarFallback>{therapist.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-semibold">{therapist.name}</h3>
                          <p className="text-lg font-medium">{therapist.price}</p>
                        </div>
                        <p className="text-muted-foreground">{therapist.specialty}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center text-sm">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span>
                            {therapist.rating} ({therapist.reviews} reviews)
                          </span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                          <span>Next: {therapist.nextAvailable}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                          <span>{therapist.location}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {therapist.languages.map((language) => (
                          <Badge key={language} variant="outline">
                            {language}
                          </Badge>
                        ))}
                      </div>

                      <p className="text-sm line-clamp-2">{therapist.bio}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-6 pt-0">
                  <Button variant="ghost" size="sm">
                    View Profile
                  </Button>
                  <Button>
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Session
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No therapists found matching your search.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setSpecialty("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {selectedTherapist && (
          <div className="lg:sticky lg:top-24 h-fit">
            <Card>
              <CardHeader>
                <CardTitle>Book a Session</CardTitle>
                <CardDescription>Select a date and time for your appointment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-7 gap-2 text-center">
                    {Array.from({ length: 7 }).map((_, i) => {
                      const date = new Date()
                      date.setDate(date.getDate() + i)
                      return (
                        <div key={i} className="space-y-1">
                          <div className="text-xs text-muted-foreground">
                            {date.toLocaleDateString("en-US", { weekday: "short" })}
                          </div>
                          <Button variant={i === 2 ? "default" : "outline"} className="w-full">
                            {date.getDate()}
                          </Button>
                        </div>
                      )
                    })}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium text-sm">Available Times</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM", "5:30 PM"].map((time) => (
                        <Button key={time} variant="outline" size="sm">
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Tabs defaultValue="video">
                    <TabsList className="w-full">
                      <TabsTrigger value="video" className="flex-1">
                        Video Call
                      </TabsTrigger>
                      <TabsTrigger value="phone" className="flex-1">
                        Phone Call
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="video" className="mt-4">
                      <p className="text-sm text-muted-foreground">Join via secure video link sent to your email</p>
                    </TabsContent>
                    <TabsContent value="phone" className="mt-4">
                      <div className="flex gap-2">
                        <Input placeholder="Enter your phone number" type="tel" />
                        <Button variant="outline" size="icon">
                          <PhoneCall className="h-4 w-4" />
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Confirm Booking</Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
