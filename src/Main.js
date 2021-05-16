import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import login from './Components/login';
import register from './Components/register';
import dashboard from './Components/dashboard';
import Careers from './Components/Careers';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={login}></Route>
      <Route exact path='/register' component={register}></Route>
      <Route exact path='/dashboard' component={dashboard}></Route>
      <Route exact path='/Careers' component={Careers}></Route>
    </Switch>
  );
}

export default Main;