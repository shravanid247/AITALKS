"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface EmotionEntry {
  date: string
  mood: number
  anxiety: number
  energy: number
  note?: string
}

// Demo data
const demoData: EmotionEntry[] = Array.from({ length: 30 }).map((_, i) => {
  const date = new Date()
  date.setDate(date.getDate() - (30 - i))

  return {
    date: date.toISOString().split("T")[0],
    mood: 3 + Math.floor(Math.random() * 7),
    anxiety: Math.floor(Math.random() * 8) + 1,
    energy: Math.floor(Math.random() * 8) + 2,
    note: i % 5 === 0 ? "Added journal entry" : undefined,
  }
})

export default function EmotionalTracker() {
  const [timeRange, setTimeRange] = useState("month")
  const [chartType, setChartType] = useState("line")

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Emotional Journey Tracker</h1>
          <p className="text-muted-foreground">Visualize your emotional patterns and track your well-being over time</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button
            onClick={() => setChartType("line")}
            variant={chartType === "line" ? "default" : "outline"}
            size="icon"
          >
            <LineChart className="h-4 w-4" />
          </Button>
          <Button onClick={() => setChartType("bar")} variant={chartType === "bar" ? "default" : "outline"} size="icon">
            <BarChart className="h-4 w-4" />
          </Button>
          <Button onClick={() => setChartType("pie")} variant={chartType === "pie" ? "default" : "outline"} size="icon">
            <PieChart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Emotional Trends</CardTitle>
            <CardDescription>Tracking your daily emotional patterns</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] flex items-center justify-center">
            {/* This would be a chart component in a real app */}
            <div className="w-full h-full bg-muted/40 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Chart visualization would appear here</p>
                <p className="text-sm text-muted-foreground">
                  {chartType === "line"
                    ? "Line chart showing emotional trends over time"
                    : chartType === "bar"
                      ? "Bar chart comparing emotional metrics"
                      : "Pie chart showing distribution of emotions"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Current State</CardTitle>
              <CardDescription>Based on your recent entries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Overall Mood</span>
                    <span className="text-sm font-medium">Good</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[75%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Anxiety Level</span>
                    <span className="text-sm font-medium">Low</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[35%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Energy</span>
                    <span className="text-sm font-medium">Moderate</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[60%]"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Insights</CardTitle>
              <CardDescription>AI-generated observations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">
                  Your mood tends to improve during weekends. Consider what activities you engage in during these times
                  that promote well-being.
                </p>
                <p className="text-sm">
                  There's a pattern of increased anxiety mid-week. Implementing stress-reduction techniques on
                  Wednesdays might be beneficial.
                </p>
                <Button variant="outline" size="sm" className="w-full mt-2">
                  View Detailed Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="entries">
          <TabsList>
            <TabsTrigger value="entries">Recent Entries</TabsTrigger>
            <TabsTrigger value="journal">Journal</TabsTrigger>
            <TabsTrigger value="goals">Goals & Progress</TabsTrigger>
          </TabsList>
          <TabsContent value="entries" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Recent Emotion Logs</CardTitle>
                <CardDescription>Review your recent emotional check-ins</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Date</th>
                        <th className="text-left p-2">Mood</th>
                        <th className="text-left p-2">Anxiety</th>
                        <th className="text-left p-2">Energy</th>
                        <th className="text-left p-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {demoData.slice(-7).map((entry, index) => (
                        <tr key={index} className="border-b last:border-0">
                          <td className="p-2">{entry.date}</td>
                          <td className="p-2">{entry.mood}/10</td>
                          <td className="p-2">{entry.anxiety}/10</td>
                          <td className="p-2">{entry.energy}/10</td>
                          <td className="p-2">{entry.note || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex justify-end mt-4">
                  <Button variant="outline" size="sm">
                    View All Entries
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="journal" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Journal</CardTitle>
                <CardDescription>Private thoughts and reflections</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center p-8 text-muted-foreground">
                  <p>Your journal entries will appear here.</p>
                  <p className="mt-2">
                    Start by adding your first entry to track your thoughts alongside your emotions.
                  </p>
                  <Button className="mt-4">Add Journal Entry</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="goals" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Wellness Goals</CardTitle>
                <CardDescription>Track your mental health goals and progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Daily Meditation</h3>
                    <div className="flex items-center">
                      <div className="w-full bg-muted rounded-full h-2.5 mr-4">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                      <span className="text-sm font-medium">70%</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">5 of 7 days this week</p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Reduce Screen Time</h3>
                    <div className="flex items-center">
                      <div className="w-full bg-muted rounded-full h-2.5 mr-4">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                      <span className="text-sm font-medium">40%</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">2 of 5 days under target</p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Weekly Outdoor Activity</h3>
                    <div className="flex items-center">
                      <div className="w-full bg-muted rounded-full h-2.5 mr-4">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                      <span className="text-sm font-medium">100%</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Completed this week</p>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button variant="outline">Add New Goal</Button>
                    <Button>View All Goals</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
