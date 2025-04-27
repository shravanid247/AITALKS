import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PopupPrompt } from "@/components/popup-prompt"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AITALKS - Your AI Friend for Mental Wellness",
  description: "AI-based mental health therapy platform offering emotional support and professional connections.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <PopupPrompt />
        </ThemeProvider>
      </body>
    </html>
  )
}
