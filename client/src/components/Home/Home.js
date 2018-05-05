import React from 'react';
import StackGrid from "react-stack-grid";

import Post from '../Post';
import './Home.scss';

const FETCH_POSTS_URL = '/api/posts';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    };
  }
  
  async componentDidMount() {
   const posts = await this.getPosts();
   
   this.setState({posts});
  }

  async getPosts() {
    try {
      const response = await fetch(FETCH_POSTS_URL);
      const json = await response.json();
      return await json.results;

    } catch (error) {
      console.log(error);
    }
  }

  renderPosts(posts) {
    if(!posts.length) return;

    return posts.map((post, index) => 
      <Post key={index} post={post} />
    )
  }

  render() {
    const { width } = this.props;
    return(
      <StackGrid
        columnWidth={width <= 768 ? '100%' : 350}
        duration={0}
      >
       {this.renderPosts(this.state.posts)}
      </StackGrid>
    );
  }
};

export default Home;
