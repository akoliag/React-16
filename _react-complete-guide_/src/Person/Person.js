//creating a functional (stateless) Component with ES6 arrow function

import React from 'react';

//props allows us to manage properties of the component
const  person = (props) => {
  return (
    <div>
      <p>I am {props.name} and I am {props.age}!</p>
      <p>{props.children}</p>
    </div>
  )
};

export default person;

//children props refers to every element that goes between opening and closing
//tag of our component - in this case hobbies
