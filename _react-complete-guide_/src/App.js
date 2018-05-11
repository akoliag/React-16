import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Aga', age: 30},
      {name: 'Steve', age: 21}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <p>It is really working!</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[2].age}>My Hobbies: Racing and Sailing</Person>
      </div>
    );
  }
}

export default App;
//state is available only class extending Component, it's not available
//in function component
