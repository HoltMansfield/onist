import * as types from '../constants/ActionTypes'
import * as actions from './'

describe('todo actions', () => {
  it('addChild should create ADD_CHILD action', () => {
    const expectedChild = {};

    expect(actions.addChild(expectedChild)).toEqual({
      type: types.ADD_CHILD,
      child: expectedChild
    })
  })

  it('deleteChild should create DELETE_CHILD action', () => {
    const childToDelete = { first: 'John', last: 'Wick' };

    expect(actions.deleteChild(childToDelete)).toEqual({
      type: types.DELETE_CHILD,
      child: childToDelete
    })
  })

  it('editChild should create EDIT_CHILD action', () => {
    const childToEdit = { first: 'John', last: 'Coltraine' };

    expect(actions.editChild(childToEdit)).toEqual({
      type: types.EDIT_CHILD,
      child: childToEdit
    })
  })
})