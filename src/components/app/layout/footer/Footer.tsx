import {ReactNode} from "react";
import {cn} from "@/lib/utils";

interface FooterProps {
  className?: string;
  readonly  children?: ReactNode;
}

export default function Footer({className, children}: FooterProps) {
  const defaultContent = (
    <div className="h-16 px-52 flex justify-center items-center">
      My Footer
    </div>
  );
  return (
    <div className={cn("w-screen", className)}>
      {children || defaultContent}
    </div>
  );
}
