interface StatusPillProps {
  label: string
}

const getClasses = (label: string): string => {
  if (label === 'activa' || label === 'confirmado') return 'bg-emerald-100 text-emerald-800'
  if (label === 'borrador' || label === 'pendiente') return 'bg-amber-100 text-amber-800'
  return 'bg-rose-100 text-rose-800'
}

export const StatusPill = ({ label }: StatusPillProps) => (
  <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${getClasses(label)}`}>
    {label}
  </span>
)
