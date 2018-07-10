import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Header from 'components/Header';
import { MoviePost, MoviePostTitle, MoviePostController } from 'components/MoviePost';
import { Spinner } from 'components/Spinner';
import GenresTag from 'components/GenresTag';

const PATH_BASE = 'https://yts.am/api/v2/list_movies.json';
const PARAM_GENRE = 'genre=';
const PARAM_SORT = 'sort_by=';
const PARAM_LIMIT = 'limit=';
const PARAM_PAGE = 'page=';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 240px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      genre: '',
      limit: '15',
      sort: 'download_count',
      loaded: false,
      nextLoaded: false,
    };
  }

  componentDidMount() {
    this.callApi();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return true;
    }
    if (this.state !== nextState) {
      return true;
    }
    return false;
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
      loaded: true,
      nextLoaded: true,
    });
  };

  callApi = async (page = 1) => {
    if (typeof this.source !== typeof undefined) {
      this.source.cancel('canceled due to new request');
    }

    this.source = axios.CancelToken.source();

    const { genre, sort, limit } = this.state;

    this.setState({
      nextLoaded: false,
    });

    return axios(
      `${PATH_BASE}?${PARAM_LIMIT + limit}&${PARAM_SORT + sort}&${PARAM_GENRE
        + genre}&${PARAM_PAGE}${page}`,
      { cancelToken: this.source.token },
    )
      .then(result => this.setData(result.data.data))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err);
        } else {
          console.log(err);
        }
        this.setState(err);
      });
  };

  loadNextPage = async (page) => {
    await this.callApi(page + 1);
  };

  choiceGenre = async (sel) => {
    const { genre } = this.state;

    if (sel !== genre) {
      await this.setState({
        genre: sel,
        loaded: false,
      });

      await this.callApi();
    }
  };

  choiceSort = async (sel) => {
    const { sort } = this.state;

    if (sort !== sel) {
      await this.setState({
        sort: sel,
        loaded: false,
      });
      await this.callApi();
    }
  };

  render() {
    const {
      result, movies, loaded, nextLoaded, genre, error, sort,
    } = this.state;

    if (error) {
      return (
        <p>
          {'Something went wrong'}
        </p>
      );
    }

    return (
      <Page>
        <Header />
        <MoviePostTitle genre={genre} />
        <GenresTag choiceGenre={this.choiceGenre} selectedGenre={genre} />
        <MoviePostController choiceSort={this.choiceSort} selectedSort={sort} />
        {loaded ? (
          <MoviePost
            movies={movies}
            page={result.page}
            loadNextPage={this.loadNextPage}
            nextLoaded={nextLoaded}
            genre={genre}
          />
        ) : (
          <Spinner />
        )}
        {console.log(this.state)}
      </Page>
    );
  }
}

export default App;
