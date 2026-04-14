export type InvitationStatus = 'activa' | 'borrador' | 'inactiva'
export type EventType = 'boda' | 'quince_anios' | 'cumpleanios' | 'corporativo' | 'otro'

export interface DbInvitationRow {
  id: string
  event_name: string
  event_type: EventType
  event_date: string
  host_user_id: string
  host_name: string
  status: InvitationStatus
  created_at: string
}

export interface Invitation {
  id: string
  name: string
  eventType: EventType
  eventDate: string
  hostUserId: string
  hostName: string
  status: InvitationStatus
  createdAt: string
}

export interface InvitationDraftInput {
  name: string
  eventType: EventType
  eventDate: string
  hostName: string
}

export const mapDbInvitationToDomain = (row: DbInvitationRow): Invitation => ({
  id: row.id,
  name: row.event_name,
  eventType: row.event_type,
  eventDate: row.event_date,
  hostUserId: row.host_user_id,
  hostName: row.host_name,
  status: row.status,
  createdAt: row.created_at,
})
