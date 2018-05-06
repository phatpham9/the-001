import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const FETCH_CELEBS_URL = '/api/celebs';

const Header = props => (
  <div className="header">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <img src="images/text-logo.svg" alt="Saostar" />
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="javascript:void(0)">Celebrities <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="javascript:void(0)">My Followings <span className="sr-only">(current)</span></a>
            </li>
          </ul>

          <CelebsSearchBox />
        </div>
      </nav>
    </div>
  </div>
);

class CelebsSearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celebs: [],
      key: '',
      results: [],
    };

    this.searchCelebs = this.searchCelebs.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  async getCelebs() {
    try {
      const response = await fetch(FETCH_CELEBS_URL);
      const json = await response.json();

      return json;
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidMount() {
    const { results } = await this.getCelebs();

    this.setState({
      celebs: results,
    });
  }

  searchCelebs(key) {
    this.setState({
      key: key.trim(),
    }, () => {
      if (key.trim()) {
        const results = this.state.celebs.filter(celeb => new RegExp(key.toLowerCase()).test(celeb.name.toLowerCase()));
        console.log(key, results);

        this.setState({
          results,
        });
      }
    });
  }

  clearSearch() {
    this.setState({
      key: '',
      results: [],
    });
  }

  render() {
    return (
      <form className="form-inline my-2 my-lg-0 dropdown">
        <input className="form-control" type="search" placeholder="Search..." aria-label="Search..." value={this.state.key} onChange={e => this.searchCelebs(e.target.value)} />

        {!!this.state.key && !!this.state.results.length && <div className="dropdown-menu show">
          {this.state.results.map(celeb => (
            <Link key={celeb.id} className="dropdown-item" to={`/celeb/${celeb.id}`}  onClick={this.clearSearch}>{celeb.name}</Link>
          ))}
        </div>}
      </form>
    );
  }
}

export default Header;
