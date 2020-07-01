import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';

import Home from './pages/Home';

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/notFound"
          exact
          render={(props) => <Home {...props} notFound />}
        />

        <Route path="/:word" exact component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
