import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import 'normalize.css/normalize.css';
import './style.css';

render(<App />, document.getElementById('root'));
