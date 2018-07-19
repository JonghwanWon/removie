import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import axios from 'axios';

import { PATH_BASE, PARAM_LIMIT, PARAM_SORT } from 'components/Constant';
import Button from 'components/Button';

const StyledMovieHero = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 660px;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  z-index: -1;
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  max-width: 960px;
  margin-bottom: 80px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 24px;
`;

const Synopsis = styled.p`
  margin-bottom: 36px;
  font-size: 16px;
  font-weight: 300;
  color: #ccc;
  text-align: center;
  line-height: 1.6;
`;

class MovieHero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: null,
    };
  }

  componentDidMount() {
    this.callApi();
  }

  componentWillUnmount() {
    this.source.cancel('canceled due to new request');
  }

  callApi = async () => {
    const { limit, sort } = this.props;

    if (typeof this.source !== typeof undefined) {
      this.source.cancel('canceled due to new request');
    }

    this.source = axios.CancelToken.source();

    return axios(`${PATH_BASE}?${PARAM_LIMIT + limit}&${PARAM_SORT + sort}`, {
      cancelToken: this.source.token,
    })
      .then(result => this.setState({ movies: result.data.data.movies }))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err);
        } else {
          console.log(err);
        }
      });
  };

  render() {
    const { movies } = this.state;
    console.log(movies);
    return (
      <StyledMovieHero>
        {movies ? (
          <MovieInfo>
            <Title>
              {movies[0].title}
            </Title>
            <Synopsis>
              {movies[0].synopsis}
            </Synopsis>
            <BackgroundImage
              src={movies[0].background_image}
              alt={`${movies[0].title} background image`}
            />
            <Button
              value="View More"
              to={`${process.env.PUBLIC_URL}/detail/${movies[0].id}`}
              href={`${process.env.PUBLIC_URL}/detail/${movies[0].id}`}
              theme="ghost"
            />
          </MovieInfo>
        ) : null}
      </StyledMovieHero>
    );
  }
}

MovieHero.propTypes = {
  limit: PropTypes.number,
  sort: PropTypes.string,
};

MovieHero.defaultProps = {
  limit: 5,
  sort: 'like_count',
};

export default MovieHero;
