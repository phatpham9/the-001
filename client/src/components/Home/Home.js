import React from 'react';
import StackGrid from 'react-stack-grid';

import InfiniteScroll from 'react-infinite-scroll-component';
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
      hasMore: true
    };

    this.loadMore = this.loadMore.bind(this);
    this.updateCurrentGrid = this.updateCurrentGrid.bind(this);
  }

  async componentDidMount() {
    // disable scroll in Infinite scroll
    document.getElementsByClassName("infinite-scroll-component")[0].style = 'height: auto;overflow: visible;'
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

  async loadMore() {
    if (this.state.offset === this.state.total) {
      this.setState({ hasMore: false });
      return;
    }
    const { results, count, total } = await this.getPosts();
    
    this.setState({
      total,
      offset: this.state.offset + count,
      posts: this.state.posts.concat(results),
    });
  }

  updateCurrentGrid() {
    this.grid.updateLayout(); 
  }

  renderPosts(posts) {
    if(!posts.length) return;

    return posts.map((post, index) => 
      <Post key={index} post={post} updateGrid={this.updateCurrentGrid}/>
    )
  }

  render() {
    const { width } = this.props;
    return(
      <div>
        <InfiniteScroll
          dataLength={this.state.posts.length}
          next={this.loadMore}
          hasMore={this.state.hasMore}
          loader={<div className="text-center">Loading ...</div>}
          endMessage={
            <p className="text-center mt-3">
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <StackGrid
            columnWidth={width <= 768 ? '100%' : (width - 50) / 3}
            gridRef={grid => this.grid = grid}
            duration={0}
            gutterHeight={7}
            gutterWidth={7}
            monitorImagesLoaded={true}
          >
            {this.renderPosts(this.state.posts)}
          </StackGrid>
        </InfiniteScroll>
      </div>
    );
  }
};

export default Home;
