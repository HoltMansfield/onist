import { combineReducers } from 'redux'
import children from './children'
import questionState from './questionState'

const rootReducer = combineReducers({
  children,
  questionState
})

export default rootReducer
