import {ReactNode} from "react";

interface ContentProps {
  className?: string;
  readonly children?: ReactNode;
}

export default function Content({className, children}: ContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
