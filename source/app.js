import React, { Fragment } from 'react';

import MainView from './views/MainView';
import './i18next';

function App () {
  return (
    <Fragment>
      <div className="container">
        <MainView />
      </div>
    </Fragment>
  );
}

export default App;
