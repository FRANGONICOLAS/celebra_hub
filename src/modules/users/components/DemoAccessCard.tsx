interface DemoAccessCardProps {
  onAccess: () => void
}

export const DemoAccessCard = ({ onAccess }: DemoAccessCardProps) => {
  return (
    <div className="rounded-2xl border border-[#e6d9ef] bg-[#fdf9ff] p-4">
      <p className="text-sm text-[#6d5380]">Acceso rápido de prueba</p>
      <h4 className="mt-1 font-serif text-2xl text-[#2d2037]">Camila Rojas</h4>
      <p className="text-sm text-[#705d82]">Organizadora principal</p>
      <button
        type="button"
        onClick={onAccess}
        className="mt-4 w-full rounded-xl bg-[#4e2d66] px-4 py-2 text-sm font-semibold text-white"
      >
        Ingresar con usuario demo
      </button>
    </div>
  )
}
