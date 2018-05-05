import React from 'react';
import StackGrid from "react-stack-grid";

import Post from '../Post';
import './Home.scss';

const FETCH_POSTS_URL = '/api/posts';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      offset: 0,
      posts: [],
    };

    this.loadMore = this.loadMore.bind(this);
  }

  async componentDidMount() {
    const { results, count, total } = await this.getPosts();

    this.setState({
      total,
      offset: this.state.offset + count,
      posts: this.state.posts.concat(results),
    });
  }

  async getPosts() {
    try {
      const response = await fetch(`${FETCH_POSTS_URL}?offset=${this.state.offset}`);
      const json = await response.json();

      return json;
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

  async loadMore() {
    const { results, count, total } = await this.getPosts();

    this.setState({
      total,
      offset: this.state.offset + count,
      posts: this.state.posts.concat(results),
    });
  }

  render() {
    const { width } = this.props;

    return(
      <div>
        <StackGrid
          columnWidth={width <= 768 ? '100%' : 350}
          duration={0}
        >
        {this.renderPosts(this.state.posts)}
        </StackGrid>

        {this.state.offset < this.state.total && (
          <div style={{textAlign: 'center'}}>
            <button style={{background: 'white', border: 'solid 1px #ccc'}} type="button" onClick={this.loadMore}>Load more...</button>
          </div>
        )}
      </div>
    );
  }
};

export default Home;
