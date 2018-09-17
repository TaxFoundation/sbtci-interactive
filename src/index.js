import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css/normalize.css';

render(<App />, document.getElementById('root'));
registerServiceWorker();
