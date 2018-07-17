import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import MovieItem from './MovieItem';

const StyledMovieList = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-wrap: ${({ isWrap } = this.props) => (isWrap ? 'wrap' : 'nowrap')};
  margin-bottom: 40px;
`;

const MovieList = ({ movies, wrap, isLongTitle }) => (
  <StyledMovieList isWrap={wrap}>
    {movies
      ? movies.map(movie => (
        <MovieItem
          key={movie.id}
          dataID={movie.id}
          poster={movie.medium_cover_image}
          title={movie.title}
          genres={movie.genres}
          runtime={movie.runtime}
          synopsis={movie.synopsis}
          rating={movie.rating}
          longTitle={movie.title_long}
          isLongTitle={isLongTitle}
        />
      ))
      : null}
  </StyledMovieList>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  wrap: PropTypes.bool,
  isLongTitle: PropTypes.bool,
};

MovieList.defaultProps = {
  movies: [],
  wrap: true,
  isLongTitle: false,
};

export default MovieList;
