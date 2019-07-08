import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavContainer from './nav/nav-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import NoMatch from "./pages/no-match";

export default class App extends Component {


  render() {
    return (
      <div className="container">

        <Router>
          <div>
            <NavContainer />
            <Switch>
              <Route exact patch='/' component={Home} />
              <Route path='/about-me' component={About} />
              <Route path='/contact-me' component={Contact} />
              <Route path='/blog' component={Blog} />
              <Route path='/portfolio/:slug' component={PortfolioDetail}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
