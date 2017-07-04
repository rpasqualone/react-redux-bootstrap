import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import store from './store';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

import App from './containers/App';

function RenderApp(EntryApp) {
  return render(
    <Provider store={store}>
      { module.hot ? <AppContainer><EntryApp /></AppContainer> : <EntryApp />}
    </Provider>,
    document.getElementById('root')
  );
}

RenderApp(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    RenderApp(NextApp);
  });
}

registerServiceWorker();
