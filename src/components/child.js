import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editChild } from '../actions'

class Child extends Component {
  handleChange(value, fieldName) {
    const child = Object.assign(this.props.child, { [fieldName]: value });
    this.props.dispatch(editChild(child));
  }

  render() {
    return (
      <div>
        <div>Child</div>
        <div>
          <input type="text"
                 placeholder="First Name"
                 value={this.props.child.firstName}
                 onChange={ e => {
                   this.handleChange(e.target.value, 'firstName')
                 }} />
        </div>
        <div>
          <input type="text"
                 placeholder="Last Name"
                 value={this.props.child.lastName}
                 onChange={ e => {
                   this.handleChange(e.target.value, 'lastName')
                 }} />
        </div>
      </div>
    )
  }
}

export default connect()(Child)
