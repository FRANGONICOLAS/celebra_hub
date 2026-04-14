import { StatusPill } from '../../commons/components/StatusPill'
import { type Invitation } from '../types/invitation.types'

interface InvitationCardProps {
  invitation: Invitation
  onOpen: (invitation: Invitation) => void
}

const eventTypeLabels: Record<Invitation['eventType'], string> = {
  boda: 'Boda',
  quince_anios: '15 años',
  cumpleanios: 'Cumpleaños',
  corporativo: 'Corporativo',
  otro: 'Otro',
}

export const InvitationCard = ({ invitation, onOpen }: InvitationCardProps) => {
  return (
    <button
      type="button"
      onClick={() => onOpen(invitation)}
      className="w-full rounded-2xl border border-[#e7d9f1] bg-white p-4 text-left transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="font-serif text-2xl text-[#2d2037]">{invitation.name}</h3>
        <StatusPill label={invitation.status} />
      </div>
      <div className="grid gap-2 text-sm text-[#6b557e] md:grid-cols-2">
        <p>
          <strong>Tipo:</strong> {eventTypeLabels[invitation.eventType]}
        </p>
        <p>
          <strong>Fecha:</strong> {new Date(invitation.eventDate).toLocaleDateString('es-PE')}
        </p>
        <p>
          <strong>Host:</strong> {invitation.hostName}
        </p>
      </div>
    </button>
  )
}
