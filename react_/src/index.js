import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/index/App';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
  , document.getElementById('root'));
