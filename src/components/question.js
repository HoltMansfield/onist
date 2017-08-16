import React from 'react';
import { connect } from 'react-redux'
import { addChild } from '../actions'

let Question = ({ dispatch }) => {
  function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  return (
      <div>
        <span>Do you have any children?</span>
        <input type="radio" name="yesNo" value="1" onClick={ e => {
          dispatch(addChild({ id: uuidv4() }));
        }}/>
        <span>Yes</span>
        <input type="radio" name="yesNo" value="0" />
        <span>No</span>
      </div>
  )
}

Question = connect()(Question)

export default Question
