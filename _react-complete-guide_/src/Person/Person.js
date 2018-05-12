//creating a functional (stateless) Component with ES6 arrow function

import React from 'react';

//props allows us to manage properties of the component
const  person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I am {props.name} and I am {props.age}!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};
//we can pass methods also as props so we can call the method that changes the state
//in another component which does not have a direct access to the state
export default person;

//children props refers to every element that goes between opening and closing
//tag of our component - in this case hobbies
