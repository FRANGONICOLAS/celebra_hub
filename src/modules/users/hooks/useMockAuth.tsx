import { createContext, useContext, useMemo, useState, type PropsWithChildren } from 'react'
import { authService } from '../services/auth.service'
import { type AuthSession } from '../types/user.types'

interface AuthContextValue {
  session: AuthSession | null
  loginDemo: () => void
  logout: () => void
  isLoggedIn: boolean
}

const AuthContext = createContext<AuthContextValue | null>(null)

export const MockAuthProvider = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<AuthSession | null>(() => authService.getSession())

  const value = useMemo<AuthContextValue>(() => ({
    session,
    isLoggedIn: Boolean(session),
    loginDemo: () => {
      const newSession = authService.loginAsDemoUser()
      setSession(newSession)
    },
    logout: () => {
      authService.logout()
      setSession(null)
    },
  }), [session])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useMockAuth = (): AuthContextValue => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useMockAuth debe usarse dentro de MockAuthProvider')
  }

  return context
}
