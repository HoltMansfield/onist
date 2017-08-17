import * as types from '../constants/ActionTypes'
import * as actions from './'

describe('questionState actions', () => {
  it('setQuestionState should create SET_QUESTION_STATE action', () => {
    const expectedNewState = {};

    expect(actions.setQuestionState(expectedNewState)).toEqual({
      type: types.SET_QUESTION_STATE,
      newState: expectedNewState
    })
  })
})
