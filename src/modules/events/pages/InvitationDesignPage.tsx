import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { invitationTemplates } from '../../../invitations/templates'

export const InvitationDesignPage = () => {
  const { invitationId } = useParams()
  const [activeTemplateId, setActiveTemplateId] = useState(invitationTemplates[0]?.id ?? '')

  const mockInvitationName = useMemo(() => {
    return invitationId ? `Invitación ${invitationId.slice(-3).toUpperCase()}` : 'Invitación'
  }, [invitationId])

  const activeTemplate = useMemo(
    () => invitationTemplates.find((template) => template.id === activeTemplateId) ?? invitationTemplates[0],
    [activeTemplateId],
  )

  return (
    <section className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#7d6890]">Editor de diseño</p>
          <h2 className="font-serif text-4xl text-[#2d2037]">{mockInvitationName}</h2>
        </div>
        <Link to="/panel/invitaciones" className="rounded-xl bg-[#4e2d66] px-4 py-2 text-sm font-semibold text-white">
          Volver al panel
        </Link>
      </div>

      <p className="mb-5 text-[#6d5780]">Selecciona una plantilla y verás el diseño completo renderizado abajo.</p>

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        {invitationTemplates.map((template) => (
          <button
            key={template.id}
            type="button"
            onClick={() => setActiveTemplateId(template.id)}
            className={`space-y-2 rounded-2xl border p-3 text-left transition ${
              activeTemplate?.id === template.id
                ? 'border-[#5a3677] bg-[#f5ecfb] shadow-lg'
                : 'border-[#e9ddf1] bg-white hover:shadow'
            }`}
          >
            <p className="text-sm font-semibold text-[#6d5780]">{template.name}</p>
            {template.preview}
          </button>
        ))}
      </div>

      <div className="rounded-3xl border border-[#e3d4ef] bg-[#f4ebfa] p-4">{activeTemplate?.design}</div>
    </section>
  )
}
