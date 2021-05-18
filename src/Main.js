import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/login';
import Register from './Pages/register';
import About from './Pages/about';
import Careers from './Pages/careers';

const Main = ({IsSignIn, setIsSignIn}) => {
  return (
  <Router>
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login IsSignIn={IsSignIn} setIsSignIn={setIsSignIn} />
      </Route>
      <Route exact path="/register">
        <Register IsSignIn={IsSignIn} setIsSignIn={setIsSignIn} />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/careers">
        <Careers />
      </Route>
    </div>
  </Router>
  );
}

export default Main;