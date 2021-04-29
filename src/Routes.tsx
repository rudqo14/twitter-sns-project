import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/main';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Main} exact />
      </Switch>
    </Router>
  );
}

export default Routes;
