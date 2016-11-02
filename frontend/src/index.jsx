import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import RootContainer from './containers/RootContainer';

const store = configureStore();

// Expose dispatch to communicate with Electron process
if (window && window.process && window.process.type == 'renderer') {
  const ipcRenderer = window.require('electron').ipcRenderer;
  ipcRenderer.on('store-dispatch', (e, action) => {
    store.dispatch(action);
  });
}

render(
  <AppContainer>
    <RootContainer store={store} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/RootContainer', () => {
    const NextApp = require('./containers/RootContainer').default;
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
