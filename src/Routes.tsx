import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Pages/main';
import Nav from './Components/Nav/nav';
import './Styles/normalize.scss';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/nav' component={Nav} exact />
      </Switch>
    </Router>
  );
}

export default Routes;
