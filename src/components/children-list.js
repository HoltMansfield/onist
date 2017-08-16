import React, { Component } from 'react'
import { connect } from 'react-redux'
import Child from './child'

class ChildrenList extends Component {
  render() {
    return (
      <div>
        {
          this.props.children.map(child => {
             return <Child key={child.id} child={child} />
          })
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    children: state.children
  })
)(ChildrenList)
