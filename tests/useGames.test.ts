import {describe, expect, test} from 'vitest'
import { renderHook, act } from '@testing-library/react'

import { useGames } from '../src/hooks/useGames'

describe('useGames hook', () => {
  test('Should add and remove games', async () => {
    const { result } = renderHook(() => useGames())

    const { addItem, removeItem } = result.current

    expect(result.current.data).toHaveLength(0)

    const gameName = window.crypto.randomUUID()

    act(() => addItem(gameName))
    expect(result.current.data).toHaveLength(1)

    act(() => removeItem(gameName))
    expect(result.current.data).toHaveLength(0)
  })
})
