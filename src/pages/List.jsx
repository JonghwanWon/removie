import React, { Component } from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import { MoviePost, MoviePostTitle, MoviePostController } from 'components/MoviePost';
import { Spinner } from 'components/Spinner';
import GenresTag from 'components/GenresTag';

import { FetchToServer } from 'lib';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 240px;
`;

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      genre: '',
      limit: '15',
      sort: 'download_count',
      page: 1,
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

  callApi = async () => {
    const {
      genre, sort, limit, page,
    } = this.state;

    this.setState({
      nextLoaded: false,
    });

    return FetchToServer(limit, sort, genre, page, this.setData);
  };

  loadNextPage = async (currentPage) => {
    await this.setState({
      page: currentPage + 1,
    });
    await this.callApi(currentPage);
  };

  choiceGenre = async (sel) => {
    const { genre } = this.state;

    if (sel !== genre) {
      await this.setState({
        genre: sel,
        loaded: false,
        page: 1,
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
        page: 1,
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

export default List;
