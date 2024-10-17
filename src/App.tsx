import React from 'react'
import { Toaster } from 'sonner'

import './App.css'

import { Item } from './components/Item'

import { useGames } from './hooks/useGames'
import { useToast } from './hooks/useToast'

import confetti from 'canvas-confetti'

function App () {
  const { data, hasDataLength, addItem, removeItem } = useGames()
  const { errorToast } = useToast()

  const handleAddItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget

    const input = form.elements.namedItem('name')
    const isInput = input instanceof HTMLInputElement

    if (!isInput) return
    if (input.value === null || String(input.value).trim() === '') {
      form.reset()

      errorToast({
        title: 'Ingresa un juego'
      })
      return
    }
    addItem(input.value)

    form.reset()
    confetti(0)
  }

  const handleRemoveItem = (id: string) => () => {
    removeItem(id)
  }

  return (
    <>
      <main className='container grid'>
        <aside>
          <h1>Prueba técnica</h1>
          <form
            name='game'
            aria-label='Formulario para agregar juegos'
            onSubmit={handleAddItem}
          >
            <label>
              Nombre:
              <input type='text' name='name' placeholder='DOOM' />
            </label>
            <button>Crear</button>
          </form>
        </aside>
        <section>
          <h3>Listado de juegos</h3>

          {!hasDataLength && (
            <section>
              <article>
                <p>No existen juegos agregados</p>
              </article>
            </section>
          )}
          <section role='feed'>
            {hasDataLength &&
              data.map(game => (
                <Item
                  key={game.id}
                  id={game.id}
                  name={game.name}
                  handleRemove={handleRemoveItem(game.id)}
                />
              ))}
          </section>
        </section>
      </main>
      <Toaster />
    </>
  )
}

export default App
