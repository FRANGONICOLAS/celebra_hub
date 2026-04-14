import { useState } from 'react'
import { BaseModal } from '../../commons/components/BaseModal'
import { type GuestInput } from '../types/guest.types'

interface CreateGuestModalProps {
  isOpen: boolean
  onClose: () => void
  onCreate: (input: GuestInput) => void
}

export const CreateGuestModal = ({ isOpen, onClose, onCreate }: CreateGuestModalProps) => {
  const [fullName, setFullName] = useState('')
  const [companionName, setCompanionName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <BaseModal title="Crear invitado" isOpen={isOpen} onClose={onClose}>
      <form
        className="space-y-3"
        onSubmit={(event) => {
          event.preventDefault()
          if (!fullName) return
          onCreate({
            fullName,
            companionName,
            phoneNumber,
            adultsCount: 1,
            childrenCount: 0,
            invitationId: 'inv_001',
          })
          setFullName('')
          setCompanionName('')
          setPhoneNumber('')
          onClose()
        }}
      >
        <input
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          placeholder="Nombre completo"
          className="w-full rounded-xl border border-[#dfcfeb] p-3"
          required
        />
        <input
          value={companionName}
          onChange={(event) => setCompanionName(event.target.value)}
          placeholder="Acompañante"
          className="w-full rounded-xl border border-[#dfcfeb] p-3"
        />
        <input
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          placeholder="Número de teléfono"
          className="w-full rounded-xl border border-[#dfcfeb] p-3"
        />
        <button type="submit" className="w-full rounded-xl bg-[#4e2d66] px-4 py-2 font-semibold text-white">
          Guardar invitado
        </button>
      </form>
    </BaseModal>
  )
}
