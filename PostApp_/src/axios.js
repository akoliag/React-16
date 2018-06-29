import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});
//we can overwrite with it some of the settings for the places where
//use the instance instead of the default object 

}
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;
