import React from 'react'
import Todo from './Todo'

export default function ToDoList({todoList,togolTodo}) {
  return (
  todoList.map(todo => {
    return <Todo key={todo.id} todo={todo} togolTodo={togolTodo}/>
  })
  )
}
