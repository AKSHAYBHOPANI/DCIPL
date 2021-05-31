import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Intro from './Pages/intro';
import Home from './Pages/Home';
import Login from './Pages/login';
import Register from './Pages/register';
import About from './Pages/about';
import Careers from './Pages/careers';
import Investment from './Pages/features/investment';
import Admin from './Pages/admin'

const Main = ({IsSignIn, setIsSignIn, User, setUser, Email, setEmail}) => {
  return (
  <Router>
    <div>
     <Route exact path="/">
     <Intro/>
     </Route>
      <Route exact path="/Home">
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
      <Route exact path="/admin">
        <Admin IsSignIn={IsSignIn} setIsSignIn={setIsSignIn} User={User} setUser={setUser} Email={Email} setEmail={setEmail}/>
      </Route>
      <Route exact path="/features/investment">
        <Investment IsSignIn={IsSignIn} setIsSignIn={setIsSignIn} User={User} setUser={setUser} Email={Email} setEmail={setEmail} />
      </Route>
    </div>
  </Router>
  );
}

export default Main;