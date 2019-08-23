import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../layouts/HomePage';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
