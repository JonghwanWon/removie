/* eslint-disable react/forbid-prop-types */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import HeroCover from './HeroCover';
import MovieInfo from './MovieInfo';
import SuggestMovies from './SuggestMovies';
import MovieInside from './MovieInside';

const StyledMovieDetail = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  width: 100%;
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

const SubMovieInfo = styled.aside`
  width: 70%;
`;

const MovieDetail = ({ movie, suggest }) => (
  <StyledMovieDetail>
    <HeroCover img={movie.background_image} movieTitle={movie.title} />
    <StyledMovieInfo>
      <WrapPoster>
        <MoviePoster src={movie.large_cover_image} alt={`${movie.title} poster`} />
      </WrapPoster>
      <MovieInfo movie={movie} />
    </StyledMovieInfo>
    <SubMovieInfo>
      <MovieInside
        movieTitle={movie.title}
        trailer={movie.yt_trailer_code}
        img1={movie.large_screenshot_image1 ? movie.large_screenshot_image1 : null}
        img2={movie.large_screenshot_image2 ? movie.large_screenshot_image2 : null}
        img3={movie.large_screenshot_image3 ? movie.large_screenshot_image3 : null}
      />
      <SuggestMovies movies={suggest} />
    </SubMovieInfo>
  </StyledMovieDetail>
);
MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
  suggest: PropTypes.array,
};

MovieDetail.defaultProps = {
  suggest: null,
};

export default MovieDetail;
