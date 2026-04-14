export type GuestStatus = 'confirmado' | 'pendiente' | 'rechazado'

export interface DbGuestRow {
  id: string
  invitation_id: string
  full_name: string
  companion_name: string
  phone_number: string
  adults_count: number
  children_count: number
  status: GuestStatus
  created_at: string
}

export interface Guest {
  id: string
  invitationId: string
  fullName: string
  companionName: string
  phoneNumber: string
  adultsCount: number
  childrenCount: number
  status: GuestStatus
  createdAt: string
}

export interface GuestInput {
  fullName: string
  companionName: string
  phoneNumber: string
  adultsCount: number
  childrenCount: number
  invitationId: string
}

export const mapDbGuestToDomain = (row: DbGuestRow): Guest => ({
  id: row.id,
  invitationId: row.invitation_id,
  fullName: row.full_name,
  companionName: row.companion_name,
  phoneNumber: row.phone_number,
  adultsCount: row.adults_count,
  childrenCount: row.children_count,
  status: row.status,
  createdAt: row.created_at,
})

export const getGuestTotal = (guest: Guest): number => guest.adultsCount + guest.childrenCount
