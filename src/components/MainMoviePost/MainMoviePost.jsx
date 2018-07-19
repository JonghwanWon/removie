import React, { Component } from 'react';
import {
  PATH_BASE, PARAM_LIMIT, PARAM_SORT, PARAM_GENRE,
} from 'components/Constant';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Spinner } from 'components/Spinner';
import { GenresTag2 } from 'components/GenresTag';
import Button from 'components/Button';
import MovieListSlider from 'components/MovieListSlider';
import Title from './Title';

const StyledMMP = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  padding: 96px 0 80px;
  border-bottom: 1px solid #ececec;
`;

class MainMoviePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: 'all',
      loaded: false,
    };
  }

  componentDidMount() {
    this.FetchToServer();
  }

  componentWillUnmount() {
    this.source.cancel('cancel due to new request');
  }

  FetchToServer = () => {
    const { limit, sort } = this.props;
    const { genre } = this.state;

    if (typeof this.source !== typeof undefined) {
      this.source.cancel('canceled due to new request');
    }

    this.source = axios.CancelToken.source();

    return axios(
      `${PATH_BASE}?${PARAM_LIMIT + limit}&${PARAM_SORT + sort}&${PARAM_GENRE + genre}`,
      { cancelToken: this.source.token },
    )
      .then(result => this.setState({ movies: result.data.data.movies, loaded: true }))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err);
        } else {
          console.log(err);
        }
      });
  };

  changeGenres = async (genre) => {
    await this.setState({ genre, loaded: false });
    await this.FetchToServer();
  };

  handleNext = () => {
    this.setState(prevState => ({
      moveCount: prevState.moveCount + 1,
      moveDirection: 'next',
    }));
  };

  handlePrev = () => {
    this.setState(prevState => ({
      moveCount: prevState.moveCount - 1,
      moveDirection: 'prev',
    }));
  };

  render() {
    const {
      limit, title, sort, visibleColumn,
    } = this.props;
    const { genre, movies, loaded } = this.state;

    return (
      <StyledMMP>
        <Title title={title} />
        <GenresTag2 changeGenres={this.changeGenres} genre={genre} />
        {loaded ? (
          <MovieListSlider limit={limit} visibleColumn={visibleColumn} movies={movies} />
        ) : (
          <Spinner />
        )}
        <Button
          to={`${process.env.PUBLIC_URL}/movie_list/${sort}&${genre}`}
          href={`${process.env.PUBLIC_URL}/movie_list/${sort}&${genre !== 'all' ? genre : 'all'}`}
        />
      </StyledMMP>
    );
  }
}

MainMoviePost.propTypes = {
  title: PropTypes.string.isRequired,
  limit: PropTypes.number,
  sort: PropTypes.string,
  visibleColumn: PropTypes.number,
};

MainMoviePost.defaultProps = {
  limit: 20,
  sort: 'date_added',
  visibleColumn: 5,
};

export default MainMoviePost;
