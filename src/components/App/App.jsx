import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Header from 'components/Header';
import MoviePost from 'components/MoviePost';
import GenresTag from 'components/GenresTag';

const PATH_BASE = 'https://yts.am/api/v2/list_movies.json';
const PARAM_GENRE = 'genre=';
const PARAM_SORT = 'sort_by=download_count';
const DEFAULT_LIMIT = 'limit=15';
const PARAM_PAGE = 'page=';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      genre: '',
    };
  }

  componentDidMount() {
    this.callApi();
  }

  setData = (data) => {
    const { movies } = this.state;
    const oldMovies = data.page_number !== 1 ? movies : [];
    const updateMovies = [...oldMovies, ...data.movies];

    this.setState({
      result: {
        limit: data.limit,
        movieCount: data.movie_count,
        page: data.page_number,
      },
      movies: updateMovies,
    });
  };

  callApi = (page = 1) => {
    const { genre } = this.state;
    return axios(
      `${PATH_BASE}?${DEFAULT_LIMIT}&${PARAM_SORT}&${PARAM_GENRE + genre}&${PARAM_PAGE}${page}`,
    )
      .then(result => this.setData(result.data.data))
      .catch(err => this.setState(err));
  };

  loadNextPage = page => this.callApi(page + 1);

  choiceGenre = async (genre) => {
    await this.setState({
      genre,
    });
    await this.callApi();
  };

  render() {
    const { result, movies } = this.state;

    return (
      <Page>
        <Header />
        <GenresTag choiceGenre={this.choiceGenre} />
        {result ? (
          <MoviePost
            movies={movies}
            count={result.movieCount}
            page={result.page}
            loadNextPage={this.loadNextPage}
          />
        ) : null}
        {console.log(this.state)}
      </Page>
    );
  }
}

export default App;
