import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';
import "./style/style.css";

ReactDOM.render(<Router />, document.querySelector('.container'));
registerServiceWorker();
