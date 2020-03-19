import React from 'react';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './store';

import Routes from './routes';
import history from './services/history';
import Globalstyle from './styles/globals';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <Globalstyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
