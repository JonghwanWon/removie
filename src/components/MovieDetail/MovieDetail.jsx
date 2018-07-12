import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMovieDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovieDetail = ({ movie }) => (
  <StyledMovieDetail>
    <h2>
      {movie.title}
    </h2>
    <span>
      {movie.year}
    </span>
    <span>
      {movie.rating}
    </span>
    <span>
      {movie.runtime}
    </span>
    <div>
      {movie.genres ? movie.genres.map(genre => (
        <span key={Math.random()}>
          {genre}
        </span>
      )) : null}
    </div>
    <span>
      {movie.download_count}
    </span>
    <span>
      {movie.like_count}
    </span>
    <p>
      {movie.description_full}
    </p>
    <div>
      {movie.yt_trailer_code ? (
        <iframe
          title="trailer"
          width="420"
          height="315"
          src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
        />
      ) : null}
    </div>
    <img src={movie.background_image} alt={movie.title} />
    <img src={movie.large_cover_image} alt={movie.title} />
    <img src={movie.large_screenshot_image1} alt={`${movie.title} screenshot`} />
    <img src={movie.large_screenshot_image2} alt={`${movie.title} screenshot`} />
    <img src={movie.large_screenshot_image3} alt={`${movie.title} screenshot`} />
    <div>
      {movie.cast.map(item => (
        <div key={item.imdb_code}>
          <span>
            {item.name}
          </span>
          <span>
            {item.character_name}
          </span>
          {item.url_small_image ? (
            <img src={item.url_small_image} alt={`${item.name} thumbnail`} />
          ) : null}
        </div>
      ))}
    </div>
  </StyledMovieDetail>
);

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default MovieDetail;
