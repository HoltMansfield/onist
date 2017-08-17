import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addChild } from '../actions'
import guidMaker from '../services/guid'

class Question extends Component {
  constructor(props) {
    super(props)
    this.handleYesClicked = this.handleYesClicked.bind(this)
  }

  handleYesClicked(e) {
    this.props.dispatch(addChild({ id: guidMaker.make() }))
  }

  render() {
    return (
      <div>
        <span>Do you have any children?</span>
        <input type="radio" name="yesNo" value="1" onClick={this.handleYesClicked}/>
        <span>Yes</span>
        <input type="radio" name="yesNo" value="0" />
        <span>No</span>
      </div>
    )
  }
}

export default connect()(Question)
