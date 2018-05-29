//creating a functional (stateless) Component with ES6 arrow function

import React, {Component} from 'react';
import classes from'./Person.css';

class Person extends Component {
  render () {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age}!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    )
  }
};
//props allows us to manage properties of the component
//we can pass methods also as props so we can call the method that changes the state
//in another component which does not have a direct access to the state
export default Person;

//children props refers to every element that goes between opening and closing
//tag of our component - in this case hobbies
