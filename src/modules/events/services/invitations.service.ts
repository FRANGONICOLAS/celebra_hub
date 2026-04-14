import {
  type EventType,
  type Invitation,
  type InvitationDraftInput,
} from '../types/invitation.types'

let invitationsMock: Invitation[] = [
  {
    id: 'inv_001',
    name: 'Boda de Valentina y Marco',
    eventType: 'boda',
    eventDate: '2026-11-22',
    hostUserId: 'user_demo_01',
    hostName: 'Camila Rojas',
    status: 'activa',
    createdAt: '2026-04-01T09:00:00.000Z',
  },
  {
    id: 'inv_002',
    name: '15 años de Sofía',
    eventType: 'quince_anios',
    eventDate: '2026-08-10',
    hostUserId: 'user_demo_01',
    hostName: 'Camila Rojas',
    status: 'borrador',
    createdAt: '2026-04-02T11:20:00.000Z',
  },
  {
    id: 'inv_003',
    name: 'Cena corporativa Helix',
    eventType: 'corporativo',
    eventDate: '2026-09-03',
    hostUserId: 'user_demo_01',
    hostName: 'Camila Rojas',
    status: 'inactiva',
    createdAt: '2026-04-04T14:50:00.000Z',
  },
]

const eventTypeLabel: Record<EventType, string> = {
  boda: 'Boda',
  quince_anios: '15 años',
  cumpleanios: 'Cumpleaños',
  corporativo: 'Corporativo',
  otro: 'Otro',
}

export const invitationTypeOptions = Object.entries(eventTypeLabel).map(([value, label]) => ({
  value: value as EventType,
  label,
}))

export const invitationsService = {
  list: async (): Promise<Invitation[]> => [...invitationsMock],
  create: async (input: InvitationDraftInput): Promise<Invitation> => {
    const next: Invitation = {
      id: `inv_${Math.random().toString(36).slice(2, 8)}`,
      name: input.name,
      eventType: input.eventType,
      eventDate: input.eventDate,
      hostUserId: 'user_demo_01',
      hostName: input.hostName,
      status: 'borrador',
      createdAt: new Date().toISOString(),
    }

    invitationsMock = [next, ...invitationsMock]
    return next
  },
  update: async (id: string, patch: Partial<Invitation>): Promise<Invitation | null> => {
    let updated: Invitation | null = null

    invitationsMock = invitationsMock.map((invitation) => {
      if (invitation.id !== id) return invitation
      updated = { ...invitation, ...patch }
      return updated
    })

    return updated
  },
  remove: async (id: string): Promise<void> => {
    invitationsMock = invitationsMock.filter((invitation) => invitation.id !== id)
  },
  getById: async (id: string): Promise<Invitation | null> => {
    return invitationsMock.find((invitation) => invitation.id === id) ?? null
  },
}
