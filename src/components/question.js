import React from 'react';
import { connect } from 'react-redux'
import { addChild } from '../actions'

let Question = ({ dispatch }) => {
  return (
      <div>
        <span>Do you have any children?</span>
        <input type="radio" name="yesNo" value="1" onClick={ e => {
          dispatch(addChild({}));
        }}/>
        <span>Yes</span>
        <input type="radio" name="yesNo" value="0" />
        <span>No</span>
      </div>
  )
}

Question = connect()(Question)

export default Question