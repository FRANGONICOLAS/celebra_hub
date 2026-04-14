import { type AuthSession, type User } from '../types/user.types'

const SESSION_KEY = 'celebra_hub_session'

const demoUser: User = {
  id: 'user_demo_01',
  fullName: 'Camila Rojas',
  phoneNumber: '+51 999 111 222',
  email: 'camila@celebrahub.demo',
  role: 'host',
  createdAt: new Date().toISOString(),
}

export const authService = {
  getDemoUser: (): User => demoUser,
  loginAsDemoUser: (): AuthSession => {
    const session: AuthSession = {
      user: demoUser,
      token: 'mock-token-demo',
    }

    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    return session
  },
  getSession: (): AuthSession | null => {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null

    try {
      return JSON.parse(raw) as AuthSession
    } catch {
      localStorage.removeItem(SESSION_KEY)
      return null
    }
  },
  logout: (): void => {
    localStorage.removeItem(SESSION_KEY)
  },
}
