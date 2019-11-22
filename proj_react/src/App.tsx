import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface Todo {
  id: number
  title: string
  completed: boolean
}

const URI = 'https://jsonplaceholder.typicode.com/todos'

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {})
  return <div>This is Hello World</div>
}

export { App }
