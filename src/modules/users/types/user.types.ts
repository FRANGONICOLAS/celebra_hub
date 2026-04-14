export type UserRole = 'host' | 'admin'

export interface DbUserRow {
  id: string
  full_name: string
  phone_number: string
  email: string
  role: UserRole
  created_at: string
}

export interface User {
  id: string
  fullName: string
  phoneNumber: string
  email: string
  role: UserRole
  createdAt: string
}

export interface AuthSession {
  user: User
  token: string
}

export const mapDbUserToUser = (row: DbUserRow): User => ({
  id: row.id,
  fullName: row.full_name,
  phoneNumber: row.phone_number,
  email: row.email,
  role: row.role,
  createdAt: row.created_at,
})
