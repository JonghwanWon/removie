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
    list-style:none;
  }

  body {
    overflow-x: hidden;
  }
`,
]);
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
