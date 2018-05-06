import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Heading.scss';

const propTypes = {
  celebId: PropTypes.string,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  medias: PropTypes.array,
};

const Heading = ({celebId, name, avatar, date, text, medias}) => (
  <div className="heading-comps">
    <div className="heading">
      <Link to={`/celeb/${celebId}`}>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>

        <div className="info">
          <div className="table-cell">
            <h3>{name}</h3>
            <p className="date">{date}</p>
          </div>
        </div>
      </Link>
    </div>

    <figcaption>
      <div className="text-wrap">
        <div className="post-msg">
          <p className="quote">{text}</p>
          {/* <p className="show-more-btn">Show more</p> */}
        </div>
      </div>

      {medias && medias.length > 0 && <div className={`thumbnail clearfix ${medias.length === 2 ? 'layout-2' : medias.length === 3 ? 'layout-3' : medias.length > 3 ? 'layout-3 more' : 'layout-1'}`}>
        {medias.slice(0, 3).map((media, index) => (
          <div className="img" key={index}>
            <img src={`/api/${media}`} alt="" />
          </div>
        ))}
      </div>}
    </figcaption>
  </div>
);

Heading.propTypes = propTypes;

export default Heading;
