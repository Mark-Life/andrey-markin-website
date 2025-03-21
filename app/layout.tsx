import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import MatrixBackground from "@/components/matrix-background"
import Grains from "@/components/grain-back"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
})

export const metadata: Metadata = {
  title: "Andrey Markin | Full-Stack AI Development",
  description: "Transform your business ideas into powerful software solutions with AI capabilities",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {/* <MatrixBackground /> */}
          {/* <Grains /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'