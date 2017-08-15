import children from './children'
import * as types from '../constants/ActionTypes'

describe('children reducer', () => {
  const initialChild = { first: 'Homer', last: 'Simpson' };
  const emptyInitialState = [];
  const initialState_1_child = [initialChild];

  it('should handle initial state', () => {
    expect(
      children(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_CHILD with a valid child object', () => {
    const expectedChild = { first: 'DeMar', last: 'DeRozan' };
    const result = children(emptyInitialState,
      {
        type: types.ADD_CHILD,
        child: expectedChild
      });

    expect(result).toEqual([expectedChild])
  })

  it('should handle ADD_CHILD with an empty child object', () => {
    const result = children(emptyInitialState,
      {
        type: types.ADD_CHILD
      })

    expect(result).toEqual([undefined])
  })

  it('should handle DELETE_CHILD', () => {
    const result = children(initialState_1_child,
      {
        type: types.DELETE_CHILD,
        child: initialChild
      });
    
    expect(result).toEqual([]);
  })

  it('should handle EDIT_CHILD', () => {
    const updatedChild = Object.assign(initialChild, { first: 'Holt '});
    const result = children(initialState_1_child,
      {
        type: types.EDIT_CHILD,
        child: updatedChild
      });
    
    expect(result).toEqual([updatedChild]);
  })

})