import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header';
import { List, Detail } from 'pages';

const App = () => (
  <Fragment>
    <Header />
    <Route exact path={`${process.env.PUBLIC_URL}/movie_list`} component={List} />
    <Route path={`${process.env.PUBLIC_URL}/movie_list/detail/:dataID`} component={Detail} />
  </Fragment>
);

export default App;
