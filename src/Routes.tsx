import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/main';
import Nav from './Components/Nav/nav';
import './Styles/normalize.scss';

function Routes() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='' component={Main} exact />
      </Switch>
    </Router>
  );
}

export default Routes;
