import React from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';

import Home from './pages/Home';

import SynonymsProvider from './context/Synonyms';

function Routes() {
  return (
    <HashRouter>
      <SynonymsProvider>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </SynonymsProvider>
    </HashRouter>
  );
}

export default Routes;
