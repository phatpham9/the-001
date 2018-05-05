import React from 'react';

import './Header.scss';

const Header = props => (
  <div className="header bg-light">
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/" style={{color: '#42ab9e'}}>Celebrities.Star</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">My Followings <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search celeb" aria-label="Search celeb" />
          </form>
        </div>
      </nav>
    </div>
  </div>
);

export default Header;
