import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JobseekerApp from './app/JobseekerApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <JobseekerApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
