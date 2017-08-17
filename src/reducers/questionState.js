import { SET_QUESTION_STATE } from '../constants/actionTypes'

/*
   false = edit in progress
   true = no edit in progress
*/
const initialState = true;

const questionState = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION_STATE:
      return action.newState
    default:
      return state
  }
}

export default questionState
