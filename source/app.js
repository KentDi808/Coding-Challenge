import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainView from './views/MainView';
import SecondaryView from './views/SecondaryView';
import './i18next';

function App () {
  return (
    <Fragment>
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/mainview" component={ MainView } />
            <Route exact path="/secondaryview" component={ SecondaryView } />
            <Route exact path="/" component={ MainView } />
          </Switch>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
