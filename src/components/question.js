import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addChild } from '../actions'
import guidMaker from '../services/guid'

class Question extends Component {
  constructor(props) {
    super(props)
    this.handleYesClicked = this.handleYesClicked.bind(this)
  }

  getNewChild() {
    return {
      id: guidMaker.make(),
      firstName: '',
      lastName: ''
    }
  }

  handleYesClicked(e) {
    this.props.dispatch(addChild(this.getNewChild()))
    e.target.checked = false
  }

  getCaption() {
    if(this.props.numberOfChildren) {
      return 'Do you have any other children?'
    }

    return 'Do you have any children?'
  }

  render() {
    return (
      <div>
        <span>{this.getCaption()}</span>
        <input className="caption" type="radio" name="yesNo" value="1" onClick={this.handleYesClicked}/>
        <span>Yes</span>
        <input type="radio" name="yesNo" value="0" />
        <span>No</span>
      </div>
    )
  }
}

export default connect(
  state => ({
    numberOfChildren: state.children.length
  })
)(Question)
