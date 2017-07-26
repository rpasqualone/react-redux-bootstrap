import React from 'react';
import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';

import App from './containers/App';

console.log(process.env);

render(<App />, document.getElementById('root'));

if (module.hot) {
	module.hot.accept('./containers/App', () => {
		render(<App />, document.getElementById('root'));
	});
}

registerServiceWorker();
