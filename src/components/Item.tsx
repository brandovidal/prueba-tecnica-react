export interface ItemProps {
  id: string
  name: string
}
export interface ItemComponentProps extends ItemProps {
  handleRemove: () => void
}

export const Item = ({ id, name, handleRemove }: ItemComponentProps) => {
  return (
    <article key={id}>
      <header>{name}</header>
      <button
        type='button'
        className='outline secondary'
        onClick={handleRemove}
        aria-label='Eliminar juego'
      >
        Eliminar
      </button>
    </article>
  )
}
