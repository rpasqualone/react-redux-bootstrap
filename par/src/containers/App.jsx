import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store, { history } from '../store';
import NotFound from '../components/NotFound';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import { AppContainer } from 'react-hot-loader';

import Main from './Main';

import '../assets/styles/App.scss';

class App extends Component {
	render() {
		return (
			<AppContainer>
				<Provider store={store}>
					<ConnectedRouter history={history}>
						<Switch>
							<Route exact path="/" component={Main} />
							       <Route component={NotFound} />
						</Switch>
					</ConnectedRouter>
				</Provider>
			</AppContainer>
		);
	}
}

export default App;
