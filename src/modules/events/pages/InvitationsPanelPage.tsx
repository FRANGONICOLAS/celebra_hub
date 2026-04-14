import { useState } from 'react'
import { AppSelect } from '../../commons/components/AppSelect'
import { SmartSearchInput } from '../../commons/components/SmartSearchInput'
import { ManagementPanelTemplate } from '../../commons/templates/ManagementPanelTemplate'
import { CreateInvitationModal } from '../components/CreateInvitationModal'
import { InvitationCard } from '../components/InvitationCard'
import { InvitationManageModal } from '../components/InvitationManageModal'
import { useInvitationsPanel } from '../hooks/useInvitationsPanel'
import { type Invitation } from '../types/invitation.types'

export const InvitationsPanelPage = () => {
  const {
    query,
    setQuery,
    eventType,
    setEventType,
    invitationTypeOptions,
    items,
    createInvitation,
    deleteInvitation,
  } = useInvitationsPanel()

  const [selected, setSelected] = useState<Invitation | null>(null)
  const [isCreateOpen, setCreateOpen] = useState(false)

  return (
    <>
      <ManagementPanelTemplate
        title="Panel de Invitaciones"
        description="Busca, filtra por tipo de evento y gestiona tus invitaciones en cards."
        toolbar={
          <div className="flex flex-col gap-3 md:flex-row">
            <SmartSearchInput
              value={query}
              onChange={setQuery}
              placeholder="Ej: boda valentina, camila, activa"
            />
            <AppSelect
              value={eventType}
              onChange={(value) => setEventType(value as typeof eventType)}
              label="Filtrar evento"
              options={[{ value: 'all', label: 'Todos' }, ...invitationTypeOptions]}
            />
            <button
              type="button"
              onClick={() => setCreateOpen(true)}
              className="rounded-2xl bg-[#4e2d66] px-5 py-3 text-sm font-semibold text-white"
            >
              Crear invitación
            </button>
          </div>
        }
      >
        <div className="grid gap-4">
          {items.map((invitation) => (
            <InvitationCard key={invitation.id} invitation={invitation} onOpen={setSelected} />
          ))}
          {items.length === 0 && (
            <p className="rounded-2xl border border-dashed border-[#d8c6e7] p-6 text-center text-[#705b83]">
              No hay resultados para tu búsqueda.
            </p>
          )}
        </div>
      </ManagementPanelTemplate>

      <InvitationManageModal
        invitation={selected}
        onClose={() => setSelected(null)}
        onDelete={(id) => {
          void deleteInvitation(id)
        }}
      />

      <CreateInvitationModal
        isOpen={isCreateOpen}
        onClose={() => setCreateOpen(false)}
        onCreate={(payload) => {
          void createInvitation(payload)
        }}
      />
    </>
  )
}
