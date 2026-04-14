import { useState } from 'react'
import { SmartSearchInput } from '../../commons/components/SmartSearchInput'
import { ManagementPanelTemplate } from '../../commons/templates/ManagementPanelTemplate'
import { CreateGuestModal } from '../components/CreateGuestModal'
import { GuestCard } from '../components/GuestCard'
import { GuestKpiGrid } from '../components/GuestKpiGrid'
import { GuestManageModal } from '../components/GuestManageModal'
import { useGuestsPanel } from '../hooks/useGuestsPanel'
import { type Guest } from '../types/guest.types'

export const GuestsPanelPage = () => {
  const {
    query,
    setQuery,
    items,
    kpis,
    createGuest,
    updateGuest,
    setGuestStatus,
    resendInvitation,
  } = useGuestsPanel()

  const [selected, setSelected] = useState<Guest | null>(null)
  const [isCreateOpen, setCreateOpen] = useState(false)

  return (
    <>
      <ManagementPanelTemplate
        title="Panel de Invitados"
        description="Controla confirmaciones, acompañantes y cantidades de adultos/niños."
        toolbar={
          <div className="flex flex-col gap-3 md:flex-row">
            <SmartSearchInput
              value={query}
              onChange={setQuery}
              placeholder="Ej: andrea, luis, confirmado"
            />
            <button
              type="button"
              onClick={() => setCreateOpen(true)}
              className="rounded-2xl bg-[#4e2d66] px-5 py-3 text-sm font-semibold text-white"
            >
              Crear invitado
            </button>
            <button
              type="button"
              className="rounded-2xl bg-[#2d2037] px-5 py-3 text-sm font-semibold text-white"
            >
              Enviar invitaciones a todos
            </button>
          </div>
        }
      >
        <GuestKpiGrid
          totalInvitados={kpis.totalInvitados}
          confirmados={kpis.confirmados}
          pendientes={kpis.pendientes}
          rechazados={kpis.rechazados}
        />

        <div className="grid gap-4">
          {items.map((guest) => (
            <GuestCard key={guest.id} guest={guest} onOpen={setSelected} />
          ))}
          {items.length === 0 && (
            <p className="rounded-2xl border border-dashed border-[#d8c6e7] p-6 text-center text-[#705b83]">
              No hay invitados que coincidan con tu búsqueda.
            </p>
          )}
        </div>
      </ManagementPanelTemplate>

      <CreateGuestModal
        isOpen={isCreateOpen}
        onClose={() => setCreateOpen(false)}
        onCreate={(payload) => {
          void createGuest(payload)
        }}
      />

      <GuestManageModal
        guest={selected}
        onClose={() => setSelected(null)}
        onUpdate={(id, patch) => {
          void updateGuest(id, patch)
        }}
        onStatus={(id, status) => {
          void setGuestStatus(id, status)
        }}
        onResend={(id) => {
          void resendInvitation(id)
        }}
      />
    </>
  )
}
