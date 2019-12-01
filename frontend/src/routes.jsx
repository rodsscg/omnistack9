import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new" component={New} />
      </Switch>
    </Router>
  );
}

export default Routes;
