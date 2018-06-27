import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
      });
  }

    render () {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
//then is a method that takes a function as the input and this function will get
//executed once the data from the backend is there. It receives 'response' object
//as input and this object is automatically passed by axios
