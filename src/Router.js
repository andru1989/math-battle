import React from 'react';
import Home from './Home';
import Board from './Board';
import NotFound from './NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/board" component={Board} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
