import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={SignUp} />
      </Switch>
    </Router>
  );
};

export default App;
