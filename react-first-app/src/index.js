import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();



