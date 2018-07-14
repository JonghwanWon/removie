import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import Root from './Client';

import registerServiceWorker from './registerServiceWorker';

injectGlobal([
  `
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  body {
    overflow-x: hidden;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
  }
`,
]);
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
