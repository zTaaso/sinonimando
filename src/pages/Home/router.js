import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from './components/NotFound';
import SynonymsContent from './components/SynonymsContent';
import Welcome from './components/Welcome';

function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/notFound" exact component={NotFound} />
      <Route path="/:word" exact component={SynonymsContent} />
    </Switch>
  );
}

export default Router;
