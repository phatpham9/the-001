import React from 'react';

import Heading from '../Heading';
import './Comment.scss';

const Comment = props => (
  <div className="comment">
    <div className="inner">
      <Heading {...props}/>
    </div>
  </div>
);

export default Comment;
