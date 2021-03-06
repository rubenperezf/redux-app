
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO } from '../actions'
console.log(`1. todo reducer`)

function todos(
  state = [
    { text: 'Feed the cat', completed: true },
    { text: 'Make bed', completed: false }
  ],
  action
) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.payload, completed: false }]
    case DELETE_TODO:
      return state.filter((todo, index) => {
        if (index !== action.payload) {
          return todo
        }
      })
      case EDIT_TODO:
        return state.filter((todo, index) => {
          if (index !== action.payload) {
            return todo
          }
        })
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.payload) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    default:
      return state
  }
}

export default todos