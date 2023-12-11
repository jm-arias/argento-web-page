
import { ReactNode } from 'react'
type Props = {
  children: ReactNode
  className?: string
}

export default function ContentContainer({children, className}: Props) {
  return (
    <div className={`${className} max-w-screen-lg px-5 2xl:mx-15 md:px-15`}>
      {children}
    </div>
  );
}
