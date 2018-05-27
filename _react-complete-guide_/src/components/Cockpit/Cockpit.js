import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
  let assignedClasses = [];
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

  return (
    <div className={classes.Cockpit}>
      <h1>This is a React App</h1>
      <p className={assignedClasses.join(' ')}>It is really working!</p>
      <button
        className={btnClass}
        onClick={this.togglePersonsHandler}>Toggle Persons
      </button>
    </div>
  );
};


export default cockpit;
