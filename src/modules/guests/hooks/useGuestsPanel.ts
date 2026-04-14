import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSmartSearch } from '../../commons/hooks/useSmartSearch'
import { guestsRepository } from '../services/guests.repository'
import { getGuestTotal, type Guest, type GuestInput, type GuestStatus } from '../types/guest.types'

export interface GuestKpis {
  totalInvitados: number
  confirmados: number
  pendientes: number
  rechazados: number
}

export const useGuestsPanel = () => {
  const [items, setItems] = useState<Guest[]>([])
  const [query, setQuery] = useState('')

  const loadItems = useCallback(async () => {
    const list = await guestsRepository.list()
    setItems(list)
  }, [])

  useEffect(() => {
    void loadItems()
  }, [loadItems])

  const searched = useSmartSearch(
    items,
    query,
    (item) => `${item.fullName} ${item.companionName} ${item.phoneNumber} ${item.status}`,
  )

  const kpis = useMemo<GuestKpis>(() => {
    return searched.reduce(
      (acc, guest) => {
        acc.totalInvitados += getGuestTotal(guest)
        if (guest.status === 'confirmado') acc.confirmados += 1
        if (guest.status === 'pendiente') acc.pendientes += 1
        if (guest.status === 'rechazado') acc.rechazados += 1
        return acc
      },
      {
        totalInvitados: 0,
        confirmados: 0,
        pendientes: 0,
        rechazados: 0,
      },
    )
  }, [searched])

  const createGuest = async (input: GuestInput): Promise<void> => {
    await guestsRepository.create(input)
    await loadItems()
  }

  const updateGuest = async (id: string, patch: Partial<Guest>): Promise<void> => {
    await guestsRepository.update(id, patch)
    await loadItems()
  }

  const setGuestStatus = async (id: string, status: GuestStatus): Promise<void> => {
    await guestsRepository.updateStatus(id, status)
    await loadItems()
  }

  const resendInvitation = async (id: string): Promise<void> => {
    await guestsRepository.resendInvitation(id)
  }

  return {
    query,
    setQuery,
    items: searched,
    kpis,
    createGuest,
    updateGuest,
    setGuestStatus,
    resendInvitation,
  }
}
