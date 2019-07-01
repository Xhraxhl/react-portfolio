import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import PortfolioContainer from './portfolio/portfolio-container';
import NavContainer from './nav/nav-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <NavContainer />

            <Switch>
              <Route exact patch='/' component={Home} />
              <Route path='/about-me' component={About} />
              <Route path='/contact-me' component={Contact} />
              <Route path='/blog' component={Blog} />
            </Switch>
          </div>
        </Router>

        <h1>REEEEEEEEEEEEEEEEE</h1>
        <div>{moment().format('MMMM Do YYYY, hh:mm:ss a')}</div>
        <PortfolioContainer />
      </div>
    );
  }
}
