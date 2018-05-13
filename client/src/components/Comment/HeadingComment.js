import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-time-ago'

import './../Heading/Heading.scss';

const propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  updateGrid: PropTypes.func.isRequired,
};

class HeadingComment extends React.Component {
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
    const {name, avatar, date, text} = this.props;
    const dateReplace = date.replace(/th|st|nd|rd|at/g, '');
    const isTextOver = (text.length > 200) ? true : false;
    const isCollapsed = this.state.isCollapsed;
    return(
      <div className="heading-comps">
        <div className="heading">
          <div>
            <div className="no-avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info">
              <div className="table-cell">
                <h3>{name}</h3>
                <TimeAgo className="date">{new Date(dateReplace)}</TimeAgo>
              </div>
            </div>
          </div>
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
        </figcaption>
      </div>
    );
  }
}

HeadingComment.propTypes = propTypes;

export default HeadingComment;
