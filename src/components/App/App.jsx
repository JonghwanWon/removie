import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Header from 'components/Header';
import MoviePost from 'components/MoviePost';

const PATH_BASE = 'https://yts.am/api/v2/list_movies.json/';
const DEFAULT_LIMIT = 'limit=15';

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
    };
  }

  componentDidMount() {
    this.getApi();
  }

  setData = (result) => {
    this.setState({
      results: result.data.data,
    });
  };

  getApi = () => axios(`${PATH_BASE}?${DEFAULT_LIMIT}`)
    .then(result => this.setData(result))
    .catch(err => this.setState(err));

  render() {
    const { results } = this.state;

    return (
      <StyledRoot>
        <Header />
        {results !== null ? (
          <MoviePost movies={results.movies} count={results.movie_count} />
        ) : null}
        {console.log(results)}
      </StyledRoot>
    );
  }
}

export default App;
