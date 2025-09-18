import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
  readonly children?: ReactNode
}

export default function Footer({ className, children }: FooterProps) {
  const defaultContent = (
    <div className={"flex h-16 items-center justify-center px-52"}>
      My Footer
    </div>
  )
  return (
    <div className={cn("w-screen", className)}>
      {children || defaultContent}
    </div>
  )
}
