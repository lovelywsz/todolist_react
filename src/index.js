import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(
	todoApp,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//render是从目前store中取出state数据，然后输出呈现在网页上
ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();