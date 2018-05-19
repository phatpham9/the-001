import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faCommentDots from '@fortawesome/fontawesome-free-solid/faCommentDots';
import faShare from '@fortawesome/fontawesome-free-solid/faShare';
import faPaperPlane from '@fortawesome/fontawesome-free-solid/faPaperPlane';

import Comment from '../Comment';
import Heading from '../Heading';
import './Post.scss';

const propTypes = {
  post: PropTypes.object.isRequired,
};

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.post.comments
    }
    this.handleLike = this.handleLike.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.handleSendComment = this.handleSendComment.bind(this);
  }

  handleLike(timestamp) {
    let isActive = document.getElementById(`like-${timestamp}`).className;
    document.getElementById(`like-${timestamp}`).className = (isActive === 'actived') ? '' : 'actived';
  }

  handleComment(timestamp) {
    let isShow = document.getElementById(`comment-box-${timestamp}`).className;
    let commentBoxs = document.getElementsByClassName(`show`);
    // Remove comment boxs
    if(commentBoxs.length) {
      for(let element of commentBoxs ) {
        element.className = 'comment-box'
      }
    }
    if(isShow.indexOf("show") === -1) {
      document.getElementById(`comment-box-${timestamp}`).className = 'comment-box show';
      document.getElementById(`text-comment-${timestamp}`).focus();
    }
    this.props.updateGrid();
  }

  handleSendComment() {
    const text = this.input.value;
    if(!text) {
      return;
    }
    const name = "Anonymous";
    const date = new Date().toString();
    const temp = {name, date, text };
    this.setState({
      comments: [...this.state.comments, temp]
    }, () => {
      this.props.updateGrid();
      this.input.value = '';
    });
  }

  render() {
    const {post, updateGrid} = this.props;
    return(
    <div className="post">
      <div className="inner">
        <Heading
          key={post.celebId}
          celebId={post.celebId}
          name={post.name}
          avatar={post.avatar}
          date={post.date}
          text={post.text}
          medias={post.medias}
          updateGrid={updateGrid}
        />
        <div className="actions">
          <a onClick={() => this.handleLike(post.timestamp)} id={`like-${post.timestamp}`}>
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <span>Like</span>
          </a>
          <a className="text-center" onClick={() => this.handleComment(post.timestamp)}>
            <FontAwesomeIcon icon={faCommentDots} className="icon" />
            <span>Comment</span>
          </a>
          <a className="text-right">
            <FontAwesomeIcon icon={faShare} className="icon" />
            <span>Share</span>
          </a>
        </div>
      </div>
      <div className="comment-box" id={`comment-box-${post.timestamp}`}>
        <input ref={(ref) => this.input = ref} type="text" placeholder="Write a comment..." id={`text-comment-${post.timestamp}`}/>
        <div className="btn-enter" onClick={this.handleSendComment}>
          <FontAwesomeIcon icon={faPaperPlane} className="icon" />
        </div>
      </div>
      <div className="content" id={`content-${post.timestamp}`}>
        { this.state.comments.length > 0 &&
          this.state.comments.map((comment, index) => 
            <Comment 
              key={index}
              name={comment.name}
              date={comment.date}
              text={comment.text}
              updateGrid={updateGrid}
            />
          )
        }
      </div>
  </div>
    );
  }
}

Post.propTypes = propTypes;

export default Post;
