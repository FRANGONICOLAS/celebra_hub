import type { ReactNode } from 'react'
import { WeddingInvitationTemplate } from './WeddingInvitationTemplate'

export interface InvitationTemplate {
  id: string
  name: string
  preview: ReactNode
  design: ReactNode
}

export const invitationTemplates: InvitationTemplate[] = [
  {
    id: 'clasica-oro',
    name: 'Clásica Oro',
    preview: (
      <article className="rounded-3xl border border-[#e7d9bc] bg-[linear-gradient(125deg,_#fffaf0_0%,_#f7ebd2_100%)] p-6 text-[#5b4722]">
        <p className="text-xs uppercase tracking-[0.3em]">Celebración</p>
        <h3 className="mt-2 font-serif text-3xl">Noche de Gala</h3>
        <p className="mt-2 text-sm">Un diseño clásico para bodas y eventos formales.</p>
      </article>
    ),
    design: <WeddingInvitationTemplate />,
  },
  {
    id: 'jardin-rosa',
    name: 'Jardín Rosa',
    preview: (
      <article className="rounded-3xl border border-[#f1cade] bg-[radial-gradient(circle_at_top_left,_#fff4f8_0%,_#fce6ef_100%)] p-6 text-[#6a2645]">
        <p className="text-xs uppercase tracking-[0.3em]">Especial</p>
        <h3 className="mt-2 font-serif text-3xl">Entre Flores</h3>
        <p className="mt-2 text-sm">Ideal para 15 años, cumpleaños y celebraciones familiares.</p>
      </article>
    ),
    design: <WeddingInvitationTemplate />,
  },
  {
    id: 'noche-zafiro',
    name: 'Noche Zafiro',
    preview: (
      <article className="rounded-3xl border border-[#b9c9ef] bg-[linear-gradient(135deg,_#eaf1ff_0%,_#dbe8ff_50%,_#cadcff_100%)] p-6 text-[#223f6b]">
        <p className="text-xs uppercase tracking-[0.3em]">Premium</p>
        <h3 className="mt-2 font-serif text-3xl">Elegancia Azul</h3>
        <p className="mt-2 text-sm">Perfecta para eventos corporativos o cenas de etiqueta.</p>
      </article>
    ),
    design: <WeddingInvitationTemplate />,
  },
]
