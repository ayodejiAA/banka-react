import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import SignupPage from '../containers/SignupPage';
import LoginPage from '../containers/LoginPage';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Route exact path="/" component={HomePage} />
    <Route path="/signup" component={SignupPage} />
    <Route path="/login" component={LoginPage} />
    <Footer />
  </BrowserRouter>
);

export default Routes;
