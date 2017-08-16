import { ADD_CHILD, DELETE_CHILD, EDIT_CHILD } from '../constants/actionTypes'

const initialState = [];

const getSiblings = (state, action) => {
  return state.filter(child =>
    child.first !== action.child.first
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
      const a = getSiblings(state, action);
      return [
        ...a
      ]
    case EDIT_CHILD:
     const b = state.filter(child =>
        child.first !== action.child.first
      )
      return [
        ...b,
        action.child
      ]
    default:
      return state
  }
}

export default children
