import './App.css'
import { Todo } from './components/model'
import InputField from './components/InputField'
import React, { useState } from 'react'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo('')
    }
  }

  console.log(todos)

  return (
    <div className='App'>
      <div className='span heading'>Taskify</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* todo */}
    </div>
  )
}

export default App
