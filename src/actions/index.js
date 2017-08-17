import * as types from '../constants/actionTypes'

export const addChild = child => ({ type: types.ADD_CHILD, child })
export const deleteChild = child => ({ type: types.DELETE_CHILD, child })
export const editChild = child => ({ type: types.EDIT_CHILD, child })

export const setQuestionState = newState => ({ type: types.SET_QUESTION_STATE, newState })
