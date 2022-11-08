import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

function ButtonRoot({children}: ButtonProps) {
  return (
    <button className="relative flex items-center justify-center
      w-full h-full text-brand-gray-700
      before:h-1 before:absolute before:top-0 before:w-full before:bg-brand-gray-800 
      hover:text-brand-purple-400 hover:border-bg-hover md:hover:pb-8 hover:pb-6 hover:before:bg-bg-hover 
      transition-all">

      {children}

    </button>
  )
}

ButtonRoot.displayName = 'Button.Root'

export const Button = {
  Root: ButtonRoot
}