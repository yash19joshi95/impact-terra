import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App ref={(reference) => window.appReference = reference}/>, document.getElementById('root'));
registerServiceWorker();
