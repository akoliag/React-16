import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <p>It is really working!</p>
        <Person name="Max" age="28"/>
        <Person name="Aga" age="30"/>
        <Person name="Steve" age="21">My Hobbies: Racing and Sailing</Person>
        </div>
    );
  }
}

export default App;
