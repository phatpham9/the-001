import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Heading.scss';

const propTypes = {
  celebId: PropTypes.string,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  medias: PropTypes.array,
};

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false
    }
  }

  render() {
    const {celebId, name, avatar, date, text, medias} = this.props;
    const isTextOver = (text.length > 200) ? true : false;
    const isCollapsed = this.state.isCollapsed;
    return(
      <div className="heading-comps">
        <div className="heading">
          {/* No avatar is user's comment */}
          <Link to={`${avatar ? `/celeb/${celebId}` : ''}`}>
            <div className={`${avatar ? 'avatar': 'no-avatar' }`}>
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
            <div className={`post-msg ${(isTextOver && !isCollapsed) && 'collapsed'}`}>
              <p className="quote">
                {text}
              </p>
            </div>
            <p onClick={() => this.setState({isCollapsed: !this.state.isCollapsed})} className="show-more-btn"> ...show more</p>
          </div>

          {medias && medias.length > 0 && <div className={`thumbnail clearfix ${medias.length === 2 ? 'layout-2' : medias.length === 3 ? 'layout-3' : medias.length > 3 ? 'layout-3 more' : 'layout-1'}`}>
            {medias.slice(0, 3).map((media, index) => (
              <div className="img" key={index}>
                <img src={media} alt="" />
              </div>
            ))}
          </div>}
        </figcaption>
      </div>
    );
  }
}

Heading.propTypes = propTypes;

export default Heading;
