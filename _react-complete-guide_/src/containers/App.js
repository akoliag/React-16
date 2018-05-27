import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


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

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
     <div className={classes.App}>
       <Cockpit
         appTitle={this.props.title}
         showPersons={this.state.showPersons}
         persons={this.state.persons}
         clicked={this.togglePersonsHandler} />
       {persons}
     </div>

    );
  }
}

export default App;
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

//this: <div className={classes.App}> is possible after unlocking css modules and importing classes
//from App.css to App.js
