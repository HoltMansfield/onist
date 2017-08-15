import React, { Component } from 'react';
import './App.css';
import Question from './components/question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Question />
      </div>
    );
  }
}

export default App;
