import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Spinner2 } from 'components/Spinner';
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

const MoviePostTitle = styled.h2`
  align-self: center;
  margin-top: 32px;
  margin-bottom: 40px;
  text-transform: Capitalize;
  font-size: 36px;
  font-weight: 300;
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
  movies, count, page, loadNextPage, nextLoaded, genre,
}) => (
  <StyledMoviePost>
    <MoviePostTitle>
      {genre !== '' ? `${genre} Movies` : 'Choose your favorite movie genre'}
    </MoviePostTitle>
    <MovieCounter count={count} />
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
  count: PropTypes.number,
  page: PropTypes.number,
  loadNextPage: PropTypes.func,
  nextLoaded: PropTypes.bool,
  genre: PropTypes.string,
};

MoviePost.defaultProps = {
  movies: null,
  count: null,
  page: 1,
  loadNextPage: null,
  nextLoaded: true,
  genre: '',
};

export default MoviePost;
