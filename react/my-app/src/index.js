import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ControPanel from './ControPanel'

ReactDOM.render(
  <ControPanel/>,
  document.getElementById('root')
);
registerServiceWorker();
