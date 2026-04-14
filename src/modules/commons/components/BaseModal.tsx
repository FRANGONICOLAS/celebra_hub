import { type PropsWithChildren } from 'react'

interface BaseModalProps extends PropsWithChildren {
  title: string
  isOpen: boolean
  onClose: () => void
}

export const BaseModal = ({ title, isOpen, onClose, children }: BaseModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-lg rounded-3xl border border-white/40 bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-serif text-2xl text-[#2d2037]">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-[#f2eaf6] px-3 py-1 text-sm font-semibold text-[#44295a]"
          >
            Cerrar
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
