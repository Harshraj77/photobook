import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Photobook from './components/Photobook';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/photobook/:id" component={Photobook} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
