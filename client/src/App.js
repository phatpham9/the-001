import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import sizeMe from 'react-sizeme';

import Home from './components/Home'
import Celeb from './components/Celeb'
import './App.scss';

const App = props => (
  <Router>
    <div className="app">
      <Route exact path='/' render={() => <Home width={props.size.width}  />} />
      <Route path='/celeb/:celebId' render={(url) => <Celeb width={props.size.width} {...url}/>} />
    </div>
  </Router>
);

export default sizeMe()(App);
