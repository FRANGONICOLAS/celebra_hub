import { useState } from 'react'
import { BaseModal } from '../../commons/components/BaseModal'
import { type EventType, type InvitationDraftInput } from '../types/invitation.types'

interface CreateInvitationModalProps {
  isOpen: boolean
  onClose: () => void
  onCreate: (input: InvitationDraftInput) => void
}

export const CreateInvitationModal = ({ isOpen, onClose, onCreate }: CreateInvitationModalProps) => {
  const [name, setName] = useState('')
  const [eventType, setEventType] = useState<EventType>('boda')
  const [eventDate, setEventDate] = useState('')

  return (
    <BaseModal title="Crear invitación" isOpen={isOpen} onClose={onClose}>
      <form
        className="space-y-3"
        onSubmit={(event) => {
          event.preventDefault()
          if (!name || !eventDate) return
          onCreate({
            name,
            eventType,
            eventDate,
            hostName: 'Camila Rojas',
          })
          setName('')
          setEventDate('')
          setEventType('boda')
          onClose()
        }}
      >
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Nombre del evento"
          className="w-full rounded-xl border border-[#dfcfeb] p-3"
          required
        />
        <select
          value={eventType}
          onChange={(event) => setEventType(event.target.value as EventType)}
          className="w-full rounded-xl border border-[#dfcfeb] p-3"
        >
          <option value="boda">Boda</option>
          <option value="quince_anios">15 años</option>
          <option value="cumpleanios">Cumpleaños</option>
          <option value="corporativo">Corporativo</option>
          <option value="otro">Otro</option>
        </select>
        <input
          value={eventDate}
          onChange={(event) => setEventDate(event.target.value)}
          type="date"
          className="w-full rounded-xl border border-[#dfcfeb] p-3"
          required
        />
        <button type="submit" className="w-full rounded-xl bg-[#4e2d66] px-4 py-2 font-semibold text-white">
          Guardar invitación
        </button>
      </form>
    </BaseModal>
  )
}
