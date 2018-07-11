import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MovieItem from './MovieItem';

const StyledMovieList = styled.ul`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const MovieList = ({ movies }) => (
  <StyledMovieList>
    {movies
      ? movies.map(movie => (
        <MovieItem
          key={movie.id}
          poster={movie.medium_cover_image}
          title={movie.title}
          genres={movie.genres}
          runtime={movie.runtime}
          synopsis={movie.synopsis}
          rating={movie.rating}
        />
      ))
      : null}
  </StyledMovieList>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movies: [],
};
export default MovieList;
