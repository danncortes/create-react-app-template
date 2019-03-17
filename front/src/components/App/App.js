import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import UsersRedux from '../UsersRedux/UsersRedux';
import UsersHooks from '../UsersHooks/UsersHooks';
import './App.css';

const App = () => (
  <MainLayout>
    <Switch>
      <Route exact path="/" component={UsersRedux} />
      <Route path="/users" component={UsersRedux} />
      <Route path="/users-hooks" component={UsersHooks} />
    </Switch>
  </MainLayout>
);

export default App;
