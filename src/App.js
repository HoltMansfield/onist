import React, { Component } from 'react'
import './App.css'
import Question from './components/question'
import ChildrenList from './components/children-list'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ChildrenList />
        <Question />
      </div>
    );
  }
}

export default App
