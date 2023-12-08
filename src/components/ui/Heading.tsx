import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Heading({ children, className }: Props) {
  return (
    <div className={className}>
      <span className="text-[1.8rem] font-800 leading-[1em] lg:text-[2.5rem] md:text-[4vw]">
        {children}
      </span>
    </div>
  );
}
