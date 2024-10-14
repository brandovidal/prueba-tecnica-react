import { useEffect, useState } from 'react'

import { ItemProps } from '../components/Item'

export const useGames = () => {
  const [data, setData] = useState<ItemProps[]>([])
  const [hasDataLength, setHasDataLength] = useState<boolean>(false)

  useEffect(() => {
    const hasDataLength = data.length > 0
    setHasDataLength(hasDataLength)
  }, [data])

  const addItem = (name: string) => {
    const newGame = {
      id: window.crypto.randomUUID(),
      name
    }
    setData(preValue => [...preValue, newGame])
  }

  const removeItem = (id: string) => {
    const itemsFiltered = data.filter(game => game.id !== id)
    setData(itemsFiltered)
  }

  return {
    data,
    hasDataLength,
    addItem,
    removeItem
  }
}
