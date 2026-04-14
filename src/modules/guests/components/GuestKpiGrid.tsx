interface GuestKpiGridProps {
  totalInvitados: number
  confirmados: number
  pendientes: number
  rechazados: number
}

export const GuestKpiGrid = ({ totalInvitados, confirmados, pendientes, rechazados }: GuestKpiGridProps) => {
  const kpis = [
    { label: 'Nro. invitados', value: totalInvitados, tone: 'text-[#2d2037]' },
    { label: 'Confirmados', value: confirmados, tone: 'text-emerald-700' },
    { label: 'Pendientes', value: pendientes, tone: 'text-amber-700' },
    { label: 'Rechazados', value: rechazados, tone: 'text-rose-700' },
  ]

  return (
    <div className="mb-5 grid gap-3 md:grid-cols-4">
      {kpis.map((kpi) => (
        <article key={kpi.label} className="rounded-2xl border border-[#eadcf3] bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-[#7a648d]">{kpi.label}</p>
          <p className={`mt-2 text-3xl font-black ${kpi.tone}`}>{kpi.value}</p>
        </article>
      ))}
    </div>
  )
}
