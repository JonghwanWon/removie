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
`;

const MoviePoster = styled.img`
  display: block;
  width: 100%;
  border: 10px solid #fff;
`;

const Contents = styled.div`
  display: flex;
  width: 80%;
  height: 500px;
  margin: 100px 20px 40px;
  overflow: hidden;
`;

const Trailer = styled.div`
  flex: 2.26;
`;

const Images = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MovieDetail = ({ movie }) => (
  <StyledMovieDetail>
    <HeroCover img={movie.background_image} movieTitle={movie.title} />
    <StyledMovieInfo>
      <WrapPoster>
        <MoviePoster src={movie.large_cover_image} alt={`${movie.title} poster`} />
      </WrapPoster>
      <MovieInfo movie={movie} />
    </StyledMovieInfo>

    <Contents>
      <Trailer>
        {movie.yt_trailer_code ? (
          <iframe
            title={`${movie.title} Trailer`}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
          />
        ) : null}
      </Trailer>
      <Images>
        <img
          style={{ width: '100%' }}
          src={movie.large_screenshot_image1}
          alt={`${movie.title} screenshot-1`}
        />
        <img
          style={{ width: '100%' }}
          src={movie.large_screenshot_image2}
          alt={`${movie.title} screenshot-2`}
        />
        <img
          style={{ width: '100%' }}
          src={movie.large_screenshot_image3}
          alt={`${movie.title} screenshot-3`}
        />
      </Images>
    </Contents>
  </StyledMovieDetail>
);
MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default MovieDetail;
