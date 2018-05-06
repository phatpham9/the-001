import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading';
import './Comment.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Comment = ({name, date, text}) => (
  <div className="comment">
    <div className="inner">
      <Heading
        name={name}
        date={date}
        text={text}
      />
    </div>
  </div>
);

Comment.propTypes = propTypes;

export default Comment;
