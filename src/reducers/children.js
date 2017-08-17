import { ADD_CHILD, DELETE_CHILD, EDIT_CHILD } from '../constants/actionTypes'

const initialState = [];

const getSiblings = (state, action) => {
  return state.filter(child =>
    child.id !== action.child.id
  )
}

const children = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHILD:
      return [
        ...state,
        action.child
      ]
    case DELETE_CHILD:
      return [
        ...getSiblings(state, action)
      ]
    case EDIT_CHILD:
      return [
        ...getSiblings(state, action),
        action.child
      ]
    default:
      return state
  }
}

export default children
