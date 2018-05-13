import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TimeAgo from 'react-time-ago';

import './Heading.scss';

const propTypes = {
  celebId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  date: PropTypes.string.isRequired,
  text: PropTypes.string,
  medias: PropTypes.array,
};


class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    }, () => {
      this.props.updateGrid();
    })
  }

  render() {
    const {celebId, name, avatar, date, text, medias} = this.props;
    const isTextOver = text && (text.length > 200) ? true : false;
    const dateReplace = date.replace(/th|st|nd|rd|at/g, '');
    const isCollapsed = this.state.isCollapsed;
    return(
      <div className="heading-comps">
        <div className="heading">
          <Link to={`/celeb/${celebId}`}>
            <div className="avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info">
              <div className="table-cell">
                <h3>{name}</h3>
                <TimeAgo className="date">{new Date(dateReplace)}</TimeAgo>
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
            <p onClick={this.handleChange} className="show-more-btn"> ...show more</p>
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
  }
}

Heading.propTypes = propTypes;

export default Heading;
