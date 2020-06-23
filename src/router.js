import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:word" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
