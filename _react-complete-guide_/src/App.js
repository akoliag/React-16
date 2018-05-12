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


  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    //Don't manipulate the state like this: this.state.persons[0].name = 'Maximilian';
    //instead use a special method:
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Agnieszka', age: 30},
        {name: 'Steven', age: 21}
      ]
    })

  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Max", age: 28},
        {name: event.target.value, age: 30},
        {name: 'Steven', age: 21}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <p>It is really working!</p>
        <button onClick={ () => this.switchNameHandler("Maximilian!!")}>Switch Name</button>
        //when using an arrow function it automatically adds a return keyword
        //in fornt of the code that goes directly after the arrow if it's all
        //written in one line, in handler call we provide the argument we want to show
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} changed={this.nameChangedHandler}/>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} click={this.switchNameHandler.bind(this, "Max!")}>
            My Hobbies: Racing and Sailing</Person>
      </div>
    );
  }
}

export default App;
//state is available only class extending Component, it's not available
//in function component

//this.switchNameHandler() would automatically execute it once React renders it to the DOM
//this.switchNameHandler - just passes the reference of this handler and this is what we need in here
