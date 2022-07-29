import './App.css'
import { Todo } from './components/model'
import InputField from './components/InputField'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = () => {}

  return (
    <div className='App'>
      <div className='span heading'>Taskify</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  )
}

export default App
