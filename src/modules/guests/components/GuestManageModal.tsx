import { BaseModal } from '../../commons/components/BaseModal'
import { type Guest } from '../types/guest.types'

interface GuestManageModalProps {
  guest: Guest | null
  onClose: () => void
  onUpdate: (id: string, patch: Partial<Guest>) => void
  onStatus: (id: string, status: Guest['status']) => void
  onResend: (id: string) => void
}

export const GuestManageModal = ({
  guest,
  onClose,
  onUpdate,
  onStatus,
  onResend,
}: GuestManageModalProps) => {
  if (!guest) return null

  return (
    <BaseModal title="Gestionar invitado" isOpen={Boolean(guest)} onClose={onClose}>
      <div className="space-y-4">
        <div className="grid gap-2 md:grid-cols-2">
          <button
            type="button"
            className="rounded-xl bg-[#ece1f5] px-3 py-2 font-semibold text-[#4e2d66]"
            onClick={() => onUpdate(guest.id, { adultsCount: Math.max(1, guest.adultsCount + 1) })}
          >
            +1 adulto
          </button>
          <button
            type="button"
            className="rounded-xl bg-[#ece1f5] px-3 py-2 font-semibold text-[#4e2d66]"
            onClick={() => onUpdate(guest.id, { adultsCount: Math.max(1, guest.adultsCount - 1) })}
          >
            -1 adulto
          </button>
          <button
            type="button"
            className="rounded-xl bg-[#ece1f5] px-3 py-2 font-semibold text-[#4e2d66]"
            onClick={() => onUpdate(guest.id, { childrenCount: Math.max(0, guest.childrenCount + 1) })}
          >
            +1 niño
          </button>
          <button
            type="button"
            className="rounded-xl bg-[#ece1f5] px-3 py-2 font-semibold text-[#4e2d66]"
            onClick={() => onUpdate(guest.id, { childrenCount: Math.max(0, guest.childrenCount - 1) })}
          >
            -1 niño
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => onStatus(guest.id, 'confirmado')} className="rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white">
            Confirmar manualmente
          </button>
          <button type="button" onClick={() => onStatus(guest.id, 'rechazado')} className="rounded-xl bg-rose-600 px-3 py-2 text-sm font-semibold text-white">
            Cancelar / Rechazar
          </button>
          <button type="button" onClick={() => onStatus(guest.id, 'pendiente')} className="rounded-xl bg-amber-500 px-3 py-2 text-sm font-semibold text-white">
            Marcar pendiente
          </button>
          <button type="button" onClick={() => onResend(guest.id)} className="rounded-xl bg-[#4e2d66] px-3 py-2 text-sm font-semibold text-white">
            Reenviar invitación
          </button>
        </div>
      </div>
    </BaseModal>
  )
}
