import React, { useState }from 'react';
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar/SearchBar'
import Data from './dummy-data';

import './App.css';

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
     const [posts, setPosts] = useState(Data);
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.

  const likePost = postId => {
    setPosts(
     posts.map(post => {
       if(post.id === postId) {
         return {...post, likes: post.likes + 1};
     } else {
       return post;
     }
    })
   )
};

  return (
    <div className='App'>
      <SearchBar/>
      <Posts likePost={likePost} posts={posts}/>
    </div>
  );
};

export default App;
