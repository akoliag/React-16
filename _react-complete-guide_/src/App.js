import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'asf1', name: 'Max', age: 28},
      { id: 'asf2', name: 'Aga', age: 30},
      { id: 'asf3', name: 'Steve', age: 21}
    ],
    showPersons: false
  }


  // switchNameHandler = (newName) => {
  //   //console.log('Was clicked!');
  //   //Don't manipulate the state like this: this.state.persons[0].name = 'Maximilian';
  //   //instead use a special method:
  //   this.setState({
  //     persons: [
  //       {name: newName, age: 28},
  //       {name: 'Agnieszka', age: 30},
  //       {name: 'Steven', age: 21}
  //     ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  //slice without an argument simply copies the object or array and returns a new one
  //in the assigned variable - the alternative to this is [...this.state.persons]
  //- spread operator
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }
//showPersons equals to what doesShow is not

  render() {

    const style = {
      backgroundColor: 'blue',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
//we can add :hover thanks to Radium
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) => {
            return <Person
              click={ () => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'green';
      style[':hover'] = {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>This is a React App</h1>
        <p className={classes.join(' ')}>It is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle
        </button>
          {persons}
      </div>
    );
  }
}

export default Radium(App);
//if every element has a unique key React can use them to compare future elements
//with the past ones and only update the DOM in places it needs to be updated.

//when we enclose the div in curly braces, we can use JS expressions between them
//e.g ternary operator but not the standard if statement

//if we use inline style the style is scoped to the component it's passed only

//state is available only as class extending Component, it's not available
//in function component

//when using an arrow function it automatically adds a return keyword
//in front of the code that goes directly after the arrow if it's all
//written in one line, in handler call we provide the argument we want to show

//this.switchNameHandler() would automatically execute it once React renders it to the DOM
//this.switchNameHandler - just passes the reference of this handler and this is what we need in here
