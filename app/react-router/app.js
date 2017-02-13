/*
 * https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// import { BrowserRouter, Match, Miss } from 'react-router';
import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './stylesheets/demo';

// <Router history={browserHistory}>
  // <Route path='/react-router' component={Home}/>
  // <Route path='/react-router/about' component={About}/>
  // <Route path='/react-router/contact' component={Contact}/>
// </Router>

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/react-router" component={Home} />
    <Route path="/react-router/contact" component={Contact}/>
    <Route path="/react-router/about" component={About}/>
  </Router>
), document.getElementById('root'));
