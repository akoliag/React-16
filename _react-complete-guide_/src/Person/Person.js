//creating a functional (stateless) Component with ES6 arrow function

import React from 'react';

const  person = () => {
  return <p>I am a Person and I am {Math.floor(Math.random()*30)}!</p>
};

export default person;
