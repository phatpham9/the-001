import React from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faCommentDots from '@fortawesome/fontawesome-free-solid/faCommentDots';
import faShare from '@fortawesome/fontawesome-free-solid/faShare';

import Comment from '../Comment';
import Heading from '../Heading';
import './Post.scss';

const propTypes = {
  post: PropTypes.object.isRequired,
};

const Post = ({post}) => (
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
      />
      <div className="actions">
        <a>
          <FontAwesomeIcon icon={faHeart} className="icon" />
          <span>Like</span>
        </a>
        <a>
          <FontAwesomeIcon icon={faCommentDots} className="icon" />
          <span>Comment</span>
        </a>
        <a>
          <FontAwesomeIcon icon={faShare} className="icon" />
          <span>Share</span>
        </a>
      </div>
    </div>
    <div className="content">
      { post.comments.length > 0 &&
        post.comments.map((comment, index) => 
          <Comment 
            key={index}
            name={comment.name}
            avatar={comment.avatar}
            date={comment.date}
            text={comment.text}
          />
        )
      }
    </div>
  </div>
);

Post.propTypes = propTypes;

export default Post;
