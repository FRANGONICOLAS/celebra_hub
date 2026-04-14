import { NavLink, Outlet } from 'react-router-dom'
import { useMockAuth } from '../../users/hooks/useMockAuth'

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-xl px-4 py-2 text-sm font-semibold transition ${
    isActive ? 'bg-[#4e2d66] text-white' : 'bg-[#f2e9f7] text-[#4e2d66] hover:bg-[#ead8f4]'
  }`

export const DashboardLayout = () => {
  const { session, logout } = useMockAuth()

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_bottom_left,_#fff8ee_0%,_#f3e8fa_50%,_#ecdef8_100%)] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 rounded-3xl border border-white/60 bg-white/70 p-4 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="font-serif text-3xl text-[#2d2037]">Celebra Hub</h1>
              <p className="text-sm text-[#6e5580]">Gestión de invitados e invitaciones</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <NavLink to="/panel/invitaciones" className={navItemClass}>
                Invitaciones
              </NavLink>
              <NavLink to="/panel/invitados" className={navItemClass}>
                Invitados
              </NavLink>
              <button
                type="button"
                onClick={logout}
                className="rounded-xl bg-[#2d2037] px-4 py-2 text-sm font-semibold text-white"
              >
                Cerrar sesión ({session?.user.fullName.split(' ')[0]})
              </button>
            </div>
          </div>
        </header>

        <Outlet />
      </div>
    </div>
  )
}
