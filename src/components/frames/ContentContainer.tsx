
import { ReactNode } from 'react'
type Props = {
  children: ReactNode
}

export default function ContentContainer({children}: Props) {
  return (
    <div className="max-w-screen-xl px-5 2xl:mx-15 md:px-15">
      {children}
    </div>
  );
}
