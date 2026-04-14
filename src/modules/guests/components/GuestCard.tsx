import { StatusPill } from '../../commons/components/StatusPill'
import { getGuestTotal, type Guest } from '../types/guest.types'

interface GuestCardProps {
  guest: Guest
  onOpen: (guest: Guest) => void
}

export const GuestCard = ({ guest, onOpen }: GuestCardProps) => {
  return (
    <button
      type="button"
      onClick={() => onOpen(guest)}
      className="w-full rounded-2xl border border-[#e6d8f0] bg-white p-4 text-left transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-serif text-2xl text-[#2d2037]">{guest.fullName}</h3>
          <p className="text-sm text-[#6f5882]">
            {guest.companionName ? `Acompañante: ${guest.companionName}` : 'Sin acompañante'}
          </p>
        </div>
        <StatusPill label={guest.status} />
      </div>
      <p className="text-sm text-[#6b557d]">
        Invitados totales de esta invitación: <strong>{getGuestTotal(guest)}</strong>
      </p>
    </button>
  )
}
