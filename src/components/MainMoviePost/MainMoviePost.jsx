import React, { Component } from 'react';
import {
  PATH_BASE, PARAM_LIMIT, PARAM_SORT, PARAM_GENRE,
} from 'components/Constant';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MovieList } from 'components/MoviePost';
import { Spinner } from 'components/Spinner';
import { GenresTag2 } from 'components/GenresTag';
import Button from 'components/Button';
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

const TestArrow = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  right: -30px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  transform: translateY(-50%);
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer
  z-index: 100;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    border-left: 20px solid #888;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    transform: translate(-35%, -50%);
  }
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

  render() {
    const { title, sort } = this.props;
    const { genre, movies, loaded } = this.state;
    return (
      <StyledMMP>
        <Title title={title} />
        <GenresTag2 changeGenres={this.changeGenres} genre={genre} />
        {loaded ? <MovieList movies={movies} wrap={false} isLongTitle /> : <Spinner />}
        <Button
          to={`/movie_list/${sort}&${genre}`}
          href={`/movie_list/${sort}&${genre !== 'all' ? genre : 'all'}`}
        />
      </StyledMMP>
    );
  }
}

MainMoviePost.propTypes = {
  title: PropTypes.string.isRequired,
  limit: PropTypes.number,
  sort: PropTypes.string,
};

MainMoviePost.defaultProps = {
  limit: 20,
  sort: 'date_added',
};

export default MainMoviePost;
