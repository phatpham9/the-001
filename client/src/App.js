import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import sizeMe from 'react-sizeme';
import timeago from 'timeago.js';

import Header from './components/Header';
import Home from './components/Home'
import Celeb from './components/Celeb'
import './App.scss';

timeago.register('vi', require('timeago.js/locales/vi'));

const Content = sizeMe()(props => (
  <div className="container">
    <Route exact path='/' render={() => <Home width={props.size.width}  />} />
    <Route path='/celeb/:celebId' render={(url) => <Celeb width={props.size.width} {...url}/>} />
  </div>
));

const App = props => (
  <Router>
    <div className="app">
      <Header />

      <Content />
    </div>
  </Router>
);

export default sizeMe()(App);
