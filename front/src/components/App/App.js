import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import UsersRedux from '../UsersRedux/UsersRedux';
import './App.css';

const App = () => (
  <MainLayout>
    <Switch>
      <Route exact path="/" component={UsersRedux} />
      <Route path="/users" component={UsersRedux} />
    </Switch>
  </MainLayout>
);

export default App;
