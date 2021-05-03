import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '@pages/Login/Login';
import SignUp from '@pages/SignUp/SignUp';

// const Login = () => <div>Homcdsaffdffdfafafdasdfassde</div>;
// const SignUp = () => <div>Home</div>;

const App = () => {
  return (
    <Switch>
      <Redirect exact path='/' to='/login' />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
    </Switch>
    // <div>adsf</div>
  );
};

export default App;
