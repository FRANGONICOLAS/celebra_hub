interface SmartSearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder: string
}

export const SmartSearchInput = ({ value, onChange, placeholder }: SmartSearchInputProps) => {
  return (
    <label className="w-full">
      <span className="mb-2 block text-sm font-semibold uppercase tracking-wide text-[#6b4a85]">
        Búsqueda inteligente
      </span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#dccbe9] bg-white px-4 py-3 text-[#2d2037] outline-none transition focus:border-[#8c58b2]"
      />
    </label>
  )
}
