import React from "react"
import AppLayout from "@/components/app/layout/AppLayout"

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AppLayout>{children}</AppLayout>
}
