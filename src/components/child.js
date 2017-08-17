import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editChild, deleteChild } from '../actions'

class Child extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.save = this.save.bind(this)
    this.cancel = this.cancel.bind(this)
    this.state = {
      showButtons: true,
      child: this.props.child
    }
  }

  handleChange(event) {
    this.props.child[event.target.name] = event.target.value
    this.setState({
      child: this.props.child
    })
  }

  save() {
    this.props.dispatch(editChild(this.props.child))
    this.setState({
      showButtons: false
    })
  }

  cancel() {
    this.props.dispatch(deleteChild(this.props.child))
  }

  getButtonDisplay() {
    if(this.state.showButtons) {
      return { display: 'block' }
    }

    return { display: 'none' }
  }

  render() {
    return (
      <div>
        <div>Child</div>
        <div>
          <input type="text"
                 name="firstName"
                 placeholder="First Name"
                 value={this.state.child.firstName}
                 onChange={this.handleChange} />
        </div>
        <div>
          <input type="text"
                 name="lastName"
                 placeholder="Last Name"
                 value={this.state.child.lastName}
                 onChange={this.handleChange} />
        </div>
        <div style={this.getButtonDisplay()}>
          <button onClick={this.cancel}>Cancel</button>
          <button onClick={this.save}>Save</button>
        </div>
      </div>
    )
  }
}

export default connect()(Child)
