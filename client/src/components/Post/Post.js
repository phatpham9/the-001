import React from 'react';
import ReactDOM from 'react-dom';
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

const handleLike = (timestamp) => {
  let isActive = document.getElementById(`like-${timestamp}`).className;
  document.getElementById(`like-${timestamp}`).className = (isActive === 'actived') ? '' : 'actived';
};

const handleComment = (timestamp, updateGrid) => {
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
  }
  updateGrid();
};

const handleSendComment = (commentsPost, timestamp, updateGrid) => {
  let textComment = document.getElementById(`text-comment-${timestamp}`).value;
  const contentDiv = document.getElementById(`content-${timestamp}`);
  let comments = []
  //eslint-disable-next-line array-callback-return
  commentsPost.map((comment, index) => {
    const commentCom = <Comment key={index} name={comment.name} date={comment.date} text={comment.text} updateGrid={updateGrid} />;
    comments = [...comments, commentCom];
  });
  const currentComment = <Comment key={textComment} name="Anonymous" date={Date().toString()} text={textComment} updateGrid={updateGrid} />;
  comments = [...comments, currentComment];
  ReactDOM.render(comments, contentDiv);
  document.getElementById(`text-comment-${timestamp}`).value = '';
  updateGrid();
}

const Post = ({post, updateGrid}) => (
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
        <a onClick={() => handleLike(post.timestamp)} id={`like-${post.timestamp}`}>
          <FontAwesomeIcon icon={faHeart} className="icon" />
          <span>Like</span>
        </a>
        <a onClick={() => handleComment(post.timestamp, updateGrid)}>
          <FontAwesomeIcon icon={faCommentDots} className="icon" />
          <span>Comment</span>
        </a>
        <a>
          <FontAwesomeIcon icon={faShare} className="icon" />
          <span>Share</span>
        </a>
      </div>
    </div>
    <div className="comment-box" id={`comment-box-${post.timestamp}`}>  
      <input type="text" placeholder="Write a comment..." id={`text-comment-${post.timestamp}`}/>
      <div className="btn-enter" onClick={() => handleSendComment(post.comments, post.timestamp, updateGrid)}>
        <FontAwesomeIcon icon={faPaperPlane} className="icon" />
      </div>
    </div>
    <div className="content" id={`content-${post.timestamp}`}>
      { post.comments.length > 0 &&
        post.comments.map((comment, index) => 
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

Post.propTypes = propTypes;

export default Post;
