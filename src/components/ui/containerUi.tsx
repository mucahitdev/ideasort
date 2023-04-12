interface ContainerUiProps {
  children: React.ReactNode,
  className?: string
}

export const ContainerUi = ({ children, className }: ContainerUiProps) => {
  return (
    <div className={`max-w-screen-2xl px-4 md:px-10 xl:px-20 mx-auto ${className}`}>
      {children}
    </div>
  )
}