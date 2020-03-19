import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Home from '../pages/Home';
import Budget from '../pages/Budget';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/fazer-orcamento" component={Budget} />
    </Switch>
  );
}
