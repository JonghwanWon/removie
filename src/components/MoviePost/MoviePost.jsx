import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MovieCounter from './MovieCounter';
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
  list-style: none;
`;

const Button = styled.button`
  padding: 15px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: transparent;
  align-self: center;
  cursor: pointer;
`;

const MoviePost = ({ movies, count }) => (
  <StyledMoviePost>
    <MovieCounter count={count} />
    <MovieList>
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          poster={movie.large_cover_image}
          title={movie.title}
          genres={movie.genres}
        />
      ))}
    </MovieList>
    <Button type="button">
      {'Read More'}
    </Button>
  </StyledMoviePost>
);

MoviePost.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  count: PropTypes.number.isRequired,
};

export default MoviePost;
