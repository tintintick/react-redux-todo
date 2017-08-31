import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {
	Provider
} from "react-redux";
import {
	createStore
} from "redux";
import todoApp from "./reducer";


let initState = {
	todos: [],
	filter: "SHOW_ALL",
};

let store = createStore(todoApp, initState);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();