import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editChild, deleteChild, setQuestionState } from '../actions'

class Child extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.save = this.save.bind(this)
    this.cancel = this.cancel.bind(this)
  }

  handleChange(event) {
    this.props.child[event.target.name] = event.target.value
  }

  save() {
    this.props.dispatch(editChild(this.props.child))
    this.props.dispatch(setQuestionState(false))
  }

  cancel() {
    this.props.dispatch(deleteChild(this.props.child))
    this.props.dispatch(setQuestionState(true))
  }

  render() {
    return (
      <div>
        <div>Child</div>
        <div>
          <input type="text"
                 name="firstName"
                 placeholder="First Name"
                 value={this.props.child.firstName}
                 onChange={this.handleChange} />
        </div>
        <div>
          <input type="text"
                 name="lastName"
                 placeholder="Last Name"
                 value={this.props.child.lastName}
                 onChange={this.handleChange} />
        </div>
        <div>
          <button onClick={this.cancel}>Cancel</button>
          <button onClick={this.save}>Save</button>
        </div>
      </div>
    )
  }
}

export default connect()(Child)
