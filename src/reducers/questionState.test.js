import questionState from './questionState'
import * as types from '../constants/ActionTypes'

describe('questionState reducer', () => {

  it('should handle initial state', () => {
    expect(questionState(undefined, {})).toEqual(false)
  })

  it('should handle SET_QUESTION_STATE being set to false', () => {
    const result = questionState(true, {
      type: types.SET_QUESTION_STATE,
      newState: false
    });

    expect(result).toEqual(false)
  })

  it('should handle SET_QUESTION_STATE being set to true', () => {
    const result = questionState(false, {
      type: types.SET_QUESTION_STATE,
      newState: true
    });

    expect(result).toEqual(true)
  })
})
