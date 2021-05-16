import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import login from './Pages/login';
import register from './Pages/register';
import about from './Pages/about';
import careers from './Pages/careers';
import dashboard from './Pages/dashboard';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={login}></Route>
      <Route exact path='/register' component={register}></Route>
      <Route exact path='/about' component={about}></Route>
      <Route exact path='/careers' component={careers}></Route>
      <Route exact path='/dashboard' component={dashboard}></Route>
    </Switch>
  );
}

export default Main;