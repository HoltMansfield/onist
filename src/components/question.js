import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addChild, setQuestionState } from '../actions'
import guidMaker from '../services/guid'

class Question extends Component {
  constructor(props) {
    super(props)
    this.handleYesClicked = this.handleYesClicked.bind(this)
    this.getDisplayState = this.getDisplayState.bind(this)
  }

  handleYesClicked(e) {
    this.props.dispatch(addChild({ id: guidMaker.make() }))
    this.props.dispatch(setQuestionState(false))
  }

  getDisplayState() {
    if(this.props.showQuestion) {
      return { display: 'block' };
    }

    return { display: 'none' };
  }

  getCaption() {
    if(this.props.numberOfChildren) {
      return 'Do you have any other children?'
    }

    return 'Do you have any children?'
  }

  render() {
    console.log(this.props)
    return (
      <div style={this.getDisplayState()}>
        <span>{this.getCaption()}</span>
        <input type="radio" name="yesNo" value="1" onClick={this.handleYesClicked}/>
        <span>Yes</span>
        <input type="radio" name="yesNo" value="0" />
        <span>No</span>
      </div>
    )
  }
}

export default connect(
  state => ({
    showQuestion: state.questionState,
    numberOfChildren: state.children.length
  })
)(Question)
