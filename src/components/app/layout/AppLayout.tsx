import React from "react"
import Header from "@/components/app/layout/header/Header"
import Footer from "@/components/app/layout/footer/Footer"
import Content from "@/components/app/layout/content/Content"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Header />
      <Content className="flex-auto">{children}</Content>
      <Footer />
    </div>
  )
}
