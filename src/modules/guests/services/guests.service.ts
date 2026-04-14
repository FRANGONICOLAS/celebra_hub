import { type Guest, type GuestInput, type GuestStatus } from '../types/guest.types'

let guestsMock: Guest[] = [
  {
    id: 'gst_001',
    invitationId: 'inv_001',
    fullName: 'Andrea Salazar',
    companionName: 'Luis Moreno',
    phoneNumber: '+51 988 111 222',
    adultsCount: 2,
    childrenCount: 0,
    status: 'confirmado',
    createdAt: '2026-04-03T10:30:00.000Z',
  },
  {
    id: 'gst_002',
    invitationId: 'inv_001',
    fullName: 'Jorge Mena',
    companionName: '',
    phoneNumber: '+51 977 456 123',
    adultsCount: 1,
    childrenCount: 0,
    status: 'pendiente',
    createdAt: '2026-04-04T12:00:00.000Z',
  },
  {
    id: 'gst_003',
    invitationId: 'inv_002',
    fullName: 'Marta Velásquez',
    companionName: 'Nicolás Paredes',
    phoneNumber: '+51 966 223 445',
    adultsCount: 2,
    childrenCount: 1,
    status: 'rechazado',
    createdAt: '2026-04-05T08:10:00.000Z',
  },
]

export const guestsService = {
  list: async (): Promise<Guest[]> => [...guestsMock],
  create: async (input: GuestInput): Promise<Guest> => {
    const next: Guest = {
      id: `gst_${Math.random().toString(36).slice(2, 8)}`,
      invitationId: input.invitationId,
      fullName: input.fullName,
      companionName: input.companionName,
      phoneNumber: input.phoneNumber,
      adultsCount: input.adultsCount,
      childrenCount: input.childrenCount,
      status: 'pendiente',
      createdAt: new Date().toISOString(),
    }
    guestsMock = [next, ...guestsMock]
    return next
  },
  update: async (id: string, patch: Partial<Guest>): Promise<Guest | null> => {
    let updated: Guest | null = null
    guestsMock = guestsMock.map((guest) => {
      if (guest.id !== id) return guest
      updated = { ...guest, ...patch }
      return updated
    })
    return updated
  },
  updateStatus: async (id: string, status: GuestStatus): Promise<Guest | null> => {
    return guestsService.update(id, { status })
  },
  remove: async (id: string): Promise<void> => {
    guestsMock = guestsMock.filter((guest) => guest.id !== id)
  },
  resendInvitation: async (_id: string): Promise<boolean> => {
    return true
  },
}
