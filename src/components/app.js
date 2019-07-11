import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavContainer from './nav/nav-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import Auth from './pages/auth';
import PortfolioManager from './pages/portfolio-manager';
import BlogManager from './pages/blog-manager';
import NoMatch from "./pages/no-match";
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
    }
    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  // For successful login
  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  // For unsuccessful login
  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  // supposed to handle logout but the <a> tag doesnt work
  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  // Checks to see if you are logged in according to the variables changed in above functions
  checkLoginStatus() {
    return axios.get("https://api.devcamp.space/logged_in", { withCredentials: true})
    .then(response => {
      const loggedIn = response.data.logged_in;
      const loggedInStatus = response.data.loggedInStatus;
      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      }  else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        })
      }
    }).catch(error => {
      console.log("error",error)
    })
  }

  // Runs the above function
  componentDidMount() {
    this.checkLoginStatus();
  }
  
  // Dynamic pages that show up depending if you are logged in or not
  authorizedPages() {
    return [
      <Route path='/portfoliomanager' component={PortfolioManager} />,
      <Route path='/blogmanager' component={BlogManager} />
    ];
  }

  // Renders main app components like NavContainer and renders the routes to other pages
  render() {
    return (
      <div className="container">

        <Router>
          <div>
            <NavContainer 
            loggedInStatus={this.state.loggedInStatus}
            handleSuccessfulLogout={this.handleSuccessfulLogout}
            />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about-me' component={About} />
              <Route path='/contact-me' component={Contact} />
              <Route path='/blog' component={Blog}/>
              {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
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
