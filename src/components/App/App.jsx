import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Header from 'components/Header';
import MoviePost from 'components/MoviePost';

const PATH_BASE = 'https://yts.am/api/v2/list_movies.json/';
const DEFAULT_LIMIT = 'limit=15';
const PARAM_PAGE = 'page=';

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.getApi();
  }

  setData = (result) => {
    this.setState({
      result,
      movies: result.movies,
    });
  };

  getApi = page => axios(`${PATH_BASE}?${DEFAULT_LIMIT}&${PARAM_PAGE}${page}`)
    .then(result => this.setData(result.data.data))
    .catch(err => this.setState(err));

  loadNextPage = page => this.getApi(page + 1);

  render() {
    const { result, movies } = this.state;

    return (
      <StyledRoot>
        <Header />
        {result ? (
          <MoviePost
            movies={movies}
            count={result.movie_count}
            page={result.page_number}
            loadNextPage={this.loadNextPage}
          />
        ) : null}
        {console.log(result)}
      </StyledRoot>
    );
  }
}

export default App;
