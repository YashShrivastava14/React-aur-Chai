import { TodoContextProvider } from './contexts/todoContext'

import './App.css'
import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (task) => {
    setTodos((prev) => [{ id: Date.now(), ...task }, ...prev])
  }

  const editTodo = (id, task) => {
    setTodos((prev) => prev.map((element) => (element.id === id ? task : element)));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((element) => element.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((eachTodo) => (
      eachTodo.id === id ? { ...eachTodo, completed: !eachTodo.completed } : eachTodo
    )
    ))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <TodoContextProvider value={{ todos, addTodo, editTodo, deleteTodo, toggleCompleted }} >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((eachTodo)=> (
                
                  <div key={eachTodo.id} className='w-full'>
                    <TodoItem todo={eachTodo}  />
                  </div>
                
              ))
            }
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
