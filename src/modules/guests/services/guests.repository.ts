import { type Guest, type GuestInput, type GuestStatus } from '../types/guest.types'
import { guestsService } from './guests.service'

export interface GuestsRepository {
  list: () => Promise<Guest[]>
  create: (input: GuestInput) => Promise<Guest>
  update: (id: string, patch: Partial<Guest>) => Promise<Guest | null>
  updateStatus: (id: string, status: GuestStatus) => Promise<Guest | null>
  remove: (id: string) => Promise<void>
  resendInvitation: (id: string) => Promise<boolean>
}

// Mock repository activo durante esta fase.
export const guestsRepository: GuestsRepository = guestsService

// Futuro: reemplazar por implementación Supabase consultando tabla guests.
