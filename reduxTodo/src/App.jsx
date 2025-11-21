import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import ListTodo from './components/ListTodos'


function App() {

  return (
    <>
    <TodoForm/>
    <ListTodo/>
    </>
  )
}

export default App
