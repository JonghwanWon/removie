import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Header from 'components/Header';
import MoviePost from 'components/MoviePost';

const PATH_BASE = 'https://yts.am/api/v2/list_movies.json';
const DEFAULT_LIMIT = 'limit=15';
const PARAM_PAGE = 'page=';

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
    };
  }

  componentDidMount() {
    this.callApi();
  }

  setData = (data) => {
    const { movies } = this.state;
    const oldMovies = data.page_number !== 1 ? movies : [];
    console.log(oldMovies);
    const updateMovies = [...oldMovies, ...data.movies];
    console.log(updateMovies);

    this.setState({
      result: {
        limit: data.limit,
        movieCount: data.movie_count,
        page: data.page_number,
      },
      movies: updateMovies,
    });
  };

  callApi = (page = 1) => axios(`${PATH_BASE}?${DEFAULT_LIMIT}&${PARAM_PAGE}${page}`)
    .then(result => this.setData(result.data.data))
    .catch(err => this.setState(err));

  loadNextPage = page => this.callApi(page + 1);

  render() {
    const { result, movies } = this.state;

    return (
      <StyledRoot>
        <Header />
        {result ? (
          <MoviePost
            movies={movies}
            count={result.movieCount}
            page={result.page}
            loadNextPage={this.loadNextPage}
          />
        ) : null}
        {console.log(this.state)}
      </StyledRoot>
    );
  }
}

export default App;
