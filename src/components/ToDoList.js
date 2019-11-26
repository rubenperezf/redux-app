
import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ todos, onToDoClick, onDeleteClick }) => {
  console.log(`5. ToDoList rendered`)
  return (
    <ul>
      {todos.map((todo, index) => (
        <ToDo key={index} {...todo} onClick={() => onToDoClick(index)} onToDoDeleteClick={()=> onDeleteClick(index)} />
      ))}
    </ul>
  )
}

export default ToDoList