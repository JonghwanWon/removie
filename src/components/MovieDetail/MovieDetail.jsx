import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeroCover from './HeroCover';
import MovieInfo from './MovieInfo';

const StyledMovieDetail = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMovieInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 1400px;
  padding: 0 50px;
`;

const WrapPoster = styled.div`
  flex: 1;
  padding: 10px 12px;
  background: #fff;
  height: 620px;
`;

const MoviePoster = styled.img`
  display: block;
  width: 100%;
`;

const Trailer = styled.div``;

const MovieDetail = ({ movie }) => (
  <StyledMovieDetail>
    <HeroCover img={movie.background_image} movieTitle={movie.title} />
    <StyledMovieInfo>
      <WrapPoster>
        <MoviePoster src={movie.large_cover_image} alt={`${movie.title} poster`} />
      </WrapPoster>
      <MovieInfo movie={movie} />
    </StyledMovieInfo>

    <Trailer>
      {movie.yt_trailer_code ? (
        <iframe
          title={`${movie.title} Trailer`}
          width="420"
          height="315"
          src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
        />
      ) : null}
    </Trailer>
    <img src={movie.large_screenshot_image1} alt={`${movie.title} screenshot`} />
    <img src={movie.large_screenshot_image2} alt={`${movie.title} screenshot`} />
    <img src={movie.large_screenshot_image3} alt={`${movie.title} screenshot`} />
  </StyledMovieDetail>
);

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default MovieDetail;
