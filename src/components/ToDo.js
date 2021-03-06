  
import React from 'react'
import DeleteToDo from '../containers/DeleteToDo'
import EditTodo from '../containers/EditTodo'

const ToDo = ({ completed, text, onClick, onToDoDeleteClick, onToDoEditClick  }) => {
  console.log(`6. todo render..again. and again...`)

  return (
    <table>
     <tbody>
        <tr>
          <td      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}>

    
      {text}
          </td>
          <td>
          <DeleteToDo onClick={onToDoDeleteClick }/>

          </td>

      </tr>

     </tbody>
    </table>
  )
}

export default ToDo