import './styles.css'
import React from 'react'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: () => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className='input' onSubmit={handleAdd}>
      <input
        type='input'
        placeholder='Enter a Task'
        className='input__box'
        value={todo}
        onChange={e => setTodo(e.target.value)}
      />
      <button className='input__submit' type='submit'>
        Go
      </button>
    </form>
  )
}

export default InputField
