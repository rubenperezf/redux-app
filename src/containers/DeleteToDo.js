
import React, { useState } from 'react'


const DeleteToDo = ({ onClick}) => {
  

  return (
    <button onClick={e=>{
        console.log('Delete button click')
        e.preventDefault()
        onClick()
    }}>Delete</button>
  )
}

export default DeleteToDo