
import { ReactNode } from 'react'
type Props = {
  children: ReactNode
  className?: string
  maxWidth?: 'lg' | 'xl' | '2xl'
}

export default function ContentContainer({children, className, maxWidth = 'lg'}: Props) {
  return (
    <div className={`${className} max-w-screen-${maxWidth} px-5 2xl:mx-15 md:px-15`}>
      {children}
    </div>
  );
}
