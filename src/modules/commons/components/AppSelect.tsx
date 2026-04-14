interface AppSelectOption {
  value: string
  label: string
}

interface AppSelectProps {
  value: string
  onChange: (value: string) => void
  options: AppSelectOption[]
  label: string
}

export const AppSelect = ({ value, onChange, options, label }: AppSelectProps) => {
  return (
    <label className="w-full md:w-64">
      <span className="mb-2 block text-sm font-semibold uppercase tracking-wide text-[#6b4a85]">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-[#dccbe9] bg-white px-4 py-3 text-[#2d2037] outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
