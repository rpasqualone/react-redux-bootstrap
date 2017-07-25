import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';

import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';

import App from './containers/App';
import NotFound from './components/NotFound';

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path="/" component={App} />
				<Route component={NotFound} />
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
