import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Heading({ children, className }: Props) {
  return (
    <div className={className}>
      <span className="text-[1.5rem] font-800 leading-[1em] 2xl:text-[2.5rem] lg:text-[2.5vw]">
        {children}
      </span>
    </div>
  );
}
