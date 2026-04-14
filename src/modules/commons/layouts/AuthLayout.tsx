import { Outlet } from 'react-router-dom'

export const AuthLayout = () => (
  <div className="min-h-screen bg-[linear-gradient(145deg,_#fdf8f2_0%,_#f4e4fb_48%,_#ebd9f2_100%)] px-4 py-10">
    <div className="mx-auto max-w-4xl">
      <Outlet />
    </div>
  </div>
)
