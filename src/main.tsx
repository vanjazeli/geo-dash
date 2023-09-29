import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import './styles/styles.scss';

const addLoadedClassToBody = () => {
	document.body.classList.add('loaded');
};

window.addEventListener('load', addLoadedClassToBody);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
);
