import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Spinner2 } from 'components/Spinner';
import MovieItem from './MovieItem';

const StyledMoviePost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const MovieList = styled.ul`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-bottom: 40px;
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
    <MovieList>
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          poster={movie.medium_cover_image}
          title={movie.title}
          genres={movie.genres}
        />
      ))}
    </MovieList>
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
