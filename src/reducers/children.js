import { ADD_CHILD, DELETE_CHILD, EDIT_CHILD } from '../constants/actionTypes'

const initialState = [];

const children = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHILD:
      return [
        ...state,
        action.child
      ]
    case DELETE_CHILD:
      const siblings = state.filter(child =>
        child.first !== action.child.first
      )
      return [
        ...siblings
      ]
    case EDIT_CHILD:
     const siblings = state.filter(child =>
        child.first !== action.child.first
      )
      return [
        ...siblings,
        action.child
      ]
    default:
      return state
  }
}

export default children