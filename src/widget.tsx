import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';

export default (element: HTMLElement) => {
  ReactDOM.render(<App environment="development" />, element);
};
