import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addChild } from '../actions'
import guidMaker from '../services/guid'

class Question extends Component {
  render() {
    return (
      <div>
        <span>Do you have any children?</span>
        <input type="radio" name="yesNo" value="1" onClick={ e => {
          this.props.dispatch(addChild({ id: guidMaker.make() }));
        }}/>
        <span>Yes</span>
        <input type="radio" name="yesNo" value="0" />
        <span>No</span>
      </div>
    )
  }
}

export default connect()(Question)
