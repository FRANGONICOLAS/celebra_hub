import { type Invitation, type InvitationDraftInput } from '../types/invitation.types'
import { invitationsService } from './invitations.service'

export interface InvitationsRepository {
  list: () => Promise<Invitation[]>
  create: (input: InvitationDraftInput) => Promise<Invitation>
  update: (id: string, patch: Partial<Invitation>) => Promise<Invitation | null>
  remove: (id: string) => Promise<void>
  getById: (id: string) => Promise<Invitation | null>
}

// Mock repository activo durante esta fase.
export const invitationsRepository: InvitationsRepository = invitationsService

// Futuro: reemplazar por implementación Supabase consultando tabla invitations.
