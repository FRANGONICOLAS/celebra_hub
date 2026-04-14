import { useNavigate } from 'react-router-dom'
import { BaseModal } from '../../commons/components/BaseModal'
import { type Invitation } from '../types/invitation.types'

interface InvitationManageModalProps {
  invitation: Invitation | null
  onClose: () => void
  onDelete: (id: string) => void
}

export const InvitationManageModal = ({ invitation, onClose, onDelete }: InvitationManageModalProps) => {
  const navigate = useNavigate()

  if (!invitation) return null

  return (
    <BaseModal title="Gestionar invitación" isOpen={Boolean(invitation)} onClose={onClose}>
      <div className="space-y-4 text-sm text-[#5e476f]">
        <p>
          Vas a gestionar <strong>{invitation.name}</strong>. Puedes editar el diseño o eliminar el item.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              navigate(`/panel/invitaciones/${invitation.id}/diseno`)
              onClose()
            }}
            className="rounded-xl bg-[#4e2d66] px-4 py-2 font-semibold text-white"
          >
            Editar diseño
          </button>
          <button
            type="button"
            onClick={() => {
              onDelete(invitation.id)
              onClose()
            }}
            className="rounded-xl bg-[#8a3e53] px-4 py-2 font-semibold text-white"
          >
            Borrar invitación
          </button>
        </div>
      </div>
    </BaseModal>
  )
}
