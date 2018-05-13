import React from 'react';
import PropTypes from 'prop-types';
import HeadingComment from './HeadingComment';
import './Comment.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  updateGrid: PropTypes.func.isRequired,
};

const Comment = ({name, date, text, updateGrid}) => (
  <div className="comment">
    <div className="inner">
      <HeadingComment
        name={name}
        date={date}
        text={text}
        updateGrid={updateGrid}
      />
    </div>
  </div>
);

Comment.propTypes = propTypes;

export default Comment;
