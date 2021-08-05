import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Intro from './Pages/intro';
import Home from './Pages/Home';
import Login from './Pages/login';
import Register from './Pages/register';
import About from './Pages/about';
import Blog from './Pages/blog';
import Careers from './Pages/careers';
import Investment from './Pages/features/investment';
import Wealth from './Pages/features/wealth';
import Retirement from './Pages/features/retirement';
import PortfolioAllocation from './Pages/features/PortfolioAllocation.js';
import Admin from './Pages/admin';
import MyProfile from './Pages/profile';

const Main = ({Profile, setProfile}) => {
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
        <Login Profile={Profile} setProfile={setProfile}/>
      </Route>
      <Route exact path="/register">
        <Register Profile={Profile} setProfile={setProfile} />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/careers">
        <Careers />
      </Route>
      <Route exact path="/blog">
        <Blog />
      </Route>
      <Route exact path="/admin">
        <Admin Profile={Profile} setProfile={setProfile} />
      </Route>
      <Route exact path="/features/investment">
        <Investment Profile={Profile} setProfile={setProfile} />
      </Route>

      <Route exact path="/features/wealth">
      <Wealth Profile={Profile} setProfile={setProfile} />
       </Route>
       
      <Route exact path="/features/retirement">
        <Retirement Profile={Profile} setProfile={setProfile} />

      </Route>

      <Route exact path="/profile">
        <MyProfile Profile={Profile} setProfile={setProfile} />

      </Route>

      <Route exact path="/features/PortfolioAllocation">
        <PortfolioAllocation Profile={Profile} setProfile={setProfile} />

      </Route>

    </div>
  </Router>
  );
}

export default Main;