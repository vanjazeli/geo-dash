import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './styles/styles.scss';

const addLoadedClassToBody = () => {
	document.body.classList.add('loaded');
};

window.addEventListener('load', addLoadedClassToBody);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
