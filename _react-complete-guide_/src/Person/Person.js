//creating a functional (stateless) Component with ES6 arrow function

import React from 'react';

//props allows us to manage properties of the component
const  person = (props) => {
  return <p>I am {props.name} and I am {props.age}!</p>
};

export default person;
