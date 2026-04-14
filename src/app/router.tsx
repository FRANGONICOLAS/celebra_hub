import { type ReactElement } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from '../modules/commons/layouts/AuthLayout'
import { DashboardLayout } from '../modules/commons/layouts/DashboardLayout'
import { MarketingLayout } from '../modules/commons/layouts/MarketingLayout'
import { InvitationDesignPage } from '../modules/events/pages/InvitationDesignPage'
import { InvitationsPanelPage } from '../modules/events/pages/InvitationsPanelPage'
import { GuestsPanelPage } from '../modules/guests/pages/GuestsPanelPage'
import { useMockAuth } from '../modules/users/hooks/useMockAuth'
import { AuthPage } from '../modules/users/pages/AuthPage'
import { HomePage } from '../modules/users/pages/HomePage'

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { isLoggedIn } = useMockAuth()
  if (!isLoggedIn) return <Navigate to="/auth/login" replace />
  return children
}

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MarketingLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <AuthPage /> },
      { path: 'register', element: <AuthPage /> },
      { index: true, element: <Navigate to="/auth/login" replace /> },
    ],
  },
  {
    path: '/panel',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/panel/invitaciones" replace /> },
      { path: 'invitaciones', element: <InvitationsPanelPage /> },
      { path: 'invitaciones/:invitationId/diseno', element: <InvitationDesignPage /> },
      { path: 'invitados', element: <GuestsPanelPage /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])
