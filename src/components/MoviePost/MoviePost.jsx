import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import device from 'response';
import { Spinner2 } from 'components/Spinner';
import MovieList from 'components/MovieList';

const StyledMoviePost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  @media ${device.laptopL} {
    width: 90%;
  }
`;

const Button = styled.button`
  padding: 15px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: transparent;
  align-self: center;
  cursor: pointer;
  color: #242424;
  transition: all 0.3s ease;

  &:hover {
    background: #242424;
    color: #fff;
  }
`;

const MoviePost = ({
  movies, page, loadNextPage, nextLoaded,
}) => (
  <StyledMoviePost>
    <MovieList movies={movies} renderType="list" />
    {nextLoaded ? (
      <Button type="button" onClick={() => loadNextPage(page)}>
        {'Read More'}
      </Button>
    ) : (
      <Spinner2 />
    )}
  </StyledMoviePost>
);

MoviePost.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.number,
  loadNextPage: PropTypes.func,
  nextLoaded: PropTypes.bool,
};

MoviePost.defaultProps = {
  movies: null,
  page: 1,
  loadNextPage: null,
  nextLoaded: true,
};

export default MoviePost;
