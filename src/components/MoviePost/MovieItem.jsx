import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMovieItem = styled.li`
  flex: 0 0 20%;
  padding: 0 12px;
  margin-bottom: 24px;

  &:nth-child(1) {
    margin-right: 2px;
  }
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4) {
    flex-grow: 1;
  }
`;

const Movie = styled.figure`
  cursor: pointer;
`;

const MoviePoster = styled.img`
  display: block;
  width: 100%;
  transition: all 0.15s linear;
`;

const MovieInfo = styled.div`
  margin: 16px 0 0;
  font-size: 14px;
  font-weight: 300;
`;

const MovieTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 21px;
  font-weight: 300;
  line-height: 1.2em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
  color: #808080;
`;

const Genre = styled.span`
  padding-right: 8px;
  padding-bottom: 4px;

  &:last-child {
    padding-right: 0;
  }
`;

const MovieItem = ({ poster, title, genres }) => (
  <StyledMovieItem>
    <Movie>
      <MoviePoster src={poster} alt={`${title} Poster`} />
      <MovieInfo>
        <MovieTitle>
          {title}
        </MovieTitle>
        <Genres>
          {genres.map(genre => (
            <Genre key={Math.random()}>
              {genre}
            </Genre>
          ))}
        </Genres>
      </MovieInfo>
    </Movie>
  </StyledMovieItem>
);

MovieItem.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieItem;
