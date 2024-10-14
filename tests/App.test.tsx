import { describe, test, expect } from 'vitest'

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../src/App'

describe('App', () => {
  test('Should test works!', async () => {
    const user = userEvent.setup()

    render(<App />)

    const input = await screen.getByRole('textbox')
    expect(input).toBeDefined()

    const gameName = window.crypto.randomUUID()
    await user.type(input, gameName)

    const form = await screen.getByRole('form')
    const addButton = form.querySelector('button')
    expect(addButton).toBeDefined()

    await user.click(addButton!)

    const list = await screen.getByRole('feed')
    expect(list.childNodes.length).toBe(1)

    const item = await screen.getByText(gameName)
    expect(item).toBeDefined()

    const removeButton = item.parentElement.querySelector('button')
    expect(removeButton).toBeDefined()

    await user.click(removeButton!)

    const noResultData = await screen.getByText('No existen juegos agregados')
    expect(noResultData).toBeDefined()

    waitFor(() => expect(list.childNodes.length).toBe(0))
  })
})
