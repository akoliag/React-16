import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Aga', age: 30},
      {name: 'Steve', age: 21}
    ],
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
//showPersons equals to what doesShow is not

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>This is a React App</h1>
        <p>It is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle
        </button>
        {
          this.state.showPersons === true ?
            <div>
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
            </div> : null
          }
      </div>
    );
  }
}

export default App;
//when we enclose the div in curly braces, we can use JS expressions between them
//e.g ternary operator but not the standard if statement
//if we use inline style the style is scoped to the component it's passed only

//state is available only class extending Component, it's not available
//in function component

//when using an arrow function it automatically adds a return keyword
//in fornt of the code that goes directly after the arrow if it's all
//written in one line, in handler call we provide the argument we want to show

//this.switchNameHandler() would automatically execute it once React renders it to the DOM
//this.switchNameHandler - just passes the reference of this handler and this is what we need in here
