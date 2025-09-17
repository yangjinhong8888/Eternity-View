import {ReactNode} from "react";
import {cn} from "@/lib/utils";

interface HeaderProps {
  className?: string;
  readonly children?: ReactNode;
}

export default function Header({className, children}: HeaderProps) {
  const defaultContent = (
    <div className="h-16 px-52 flex justify-between items-center">
      <div>Eternity Logo</div>
      <div className="flex-auto"/>
      <div>Eternity Navigation</div>
      <div>Eternity Avatar</div>
    </div>
  );

  return (
    <div className={cn('fixed top-0 w-full transition duration-300 hover:bg-white/10 hover:backdrop-blur-sm', className)}>
      {children || defaultContent}
    </div>
  );
}
