import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSmartSearch } from '../../commons/hooks/useSmartSearch'
import {
  invitationTypeOptions,
} from '../services/invitations.service'
import { invitationsRepository } from '../services/invitations.repository'
import { type EventType, type Invitation, type InvitationDraftInput } from '../types/invitation.types'

export const useInvitationsPanel = () => {
  const [items, setItems] = useState<Invitation[]>([])
  const [query, setQuery] = useState('')
  const [eventType, setEventType] = useState<EventType | 'all'>('all')

  const loadItems = useCallback(async () => {
    const list = await invitationsRepository.list()
    setItems(list)
  }, [])

  useEffect(() => {
    void loadItems()
  }, [loadItems])

  const searched = useSmartSearch(
    items,
    query,
    (item) => `${item.name} ${item.hostName} ${item.eventType} ${item.status}`,
  )

  const filtered = useMemo(() => {
    if (eventType === 'all') return searched
    return searched.filter((item) => item.eventType === eventType)
  }, [searched, eventType])

  const createInvitation = async (input: InvitationDraftInput): Promise<void> => {
    await invitationsRepository.create(input)
    await loadItems()
  }

  const deleteInvitation = async (id: string): Promise<void> => {
    await invitationsRepository.remove(id)
    await loadItems()
  }

  const updateInvitation = async (id: string, patch: Partial<Invitation>): Promise<void> => {
    await invitationsRepository.update(id, patch)
    await loadItems()
  }

  return {
    query,
    setQuery,
    eventType,
    setEventType,
    items: filtered,
    createInvitation,
    deleteInvitation,
    updateInvitation,
    invitationTypeOptions,
  }
}
