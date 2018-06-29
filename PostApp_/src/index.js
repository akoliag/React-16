import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
  console.log(request);
  return request;
  //we need to always return the request/config otherwise we're blocking the request
}, error => {
  console.log(error);
  return Promise.reject(error);
  //we place it so we can forward it to our request as we wrote it in a component
});

//interceptor to handle responses:
axios.interceptors.response.use(response => {
  console.log(response);
  return response;
}, error => {
  console.log(error);
  return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
