import { useMemo } from 'react'

const normalize = (value: string): string =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim()

export const useSmartSearch = <T,>(
  items: T[],
  query: string,
  readText: (item: T) => string,
): T[] => {
  return useMemo(() => {
    const normalizedQuery = normalize(query)
    if (!normalizedQuery) return items

    const tokens = normalizedQuery.split(/\s+/)

    return items
      .map((item) => {
        const haystack = normalize(readText(item))
        const score = tokens.reduce((acc, token) => {
          if (!haystack.includes(token)) return acc
          return acc + (haystack.startsWith(token) ? 3 : 1)
        }, 0)

        return { item, score }
      })
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((entry) => entry.item)
  }, [items, query, readText])
}
