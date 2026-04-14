import { type PropsWithChildren, type ReactNode } from 'react'

interface ManagementPanelTemplateProps extends PropsWithChildren {
  title: string
  description: string
  toolbar: ReactNode
}

export const ManagementPanelTemplate = ({
  title,
  description,
  toolbar,
  children,
}: ManagementPanelTemplateProps) => {
  return (
    <section className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-xl backdrop-blur md:p-6">
      <header className="mb-5 flex flex-col gap-4 border-b border-[#eadcf3] pb-5 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-serif text-3xl text-[#2d2037]">{title}</h2>
          <p className="text-sm text-[#715b84]">{description}</p>
        </div>
        <div className="w-full md:w-auto">{toolbar}</div>
      </header>
      {children}
    </section>
  )
}
