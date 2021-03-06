import React, { Component } from 'react';
import {
  PATH_BASE, PARAM_LIMIT, PARAM_SORT, PARAM_GENRE,
} from 'components/Constant';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import device from 'response';
import { Spinner } from 'components/Spinner';
import Button from 'components/Button';
import MovieList from 'components/MovieList';
import GenresTag from './GenresTag';
import Title from './Title';

const Page = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  padding: 96px 0 80px;
  border-bottom: 1px solid #ececec;

  @media (max-width: 1600px) {
    max-width: 1280px;
  }
  
  @media ${device.laptopL} {
    max-width: 80%;
  }
  @media ${device.table} {
    padding: 72px 0 80px;
  }
`;

class MainMoviePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: 'All',
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
    let { genre } = this.state;

    if (genre === 'All') {
      genre = '';
    }
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
    const {
      title, sort, limit,
    } = this.props;
    const { genre, movies, loaded } = this.state;

    return (
      <Page>
        <Title title={title} />
        <GenresTag changeGenres={this.changeGenres} genre={genre} />
        {loaded
          ? <MovieList movies={movies} limit={limit} renderType="slider" /> : <Spinner />
        }
        <Button
          to={`${process.env.PUBLIC_URL}/movie_list/${sort}&${genre}`}
          href={`${process.env.PUBLIC_URL}/movie_list/${sort}&${genre !== '' ? genre : 'All'}`}
        />
      </Page>
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
