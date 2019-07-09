import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavContainer from './nav/nav-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import Auth from './pages/auth';
import NoMatch from "./pages/no-match";
import Axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
    }
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return Axios.get("https://api.devcamp.space/logged_in", { withCredentials: true})
    .then(response => {
      const loggedIn = response.data.logged_in;
      const loggedInStatus = response.data.loggedInStatus;
      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      }  else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        })
      }
    }).catch(error => {
      console.log("error",error)
    })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return (
      <div className="container">

        <Router>
          <div>
            <NavContainer />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about-me' component={About} />
              <Route path='/contact-me' component={Contact} />
              <Route path='/blog' component={Blog} />
              <Route path='/portfolio/:slug' component={PortfolioDetail}/>
              <Route path='/auth' 
                render={props => (<Auth {...props} 
                handleSuccessfulLogin={this.handleSuccessfulLogin} 
                handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}/>)} />
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
