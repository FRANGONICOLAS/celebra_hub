import { Outlet } from 'react-router-dom'

export const MarketingLayout = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_#fff9f4_0%,_#f8ecff_45%,_#efe3f7_100%)]">
      <Outlet />
    </div>
  )
}
