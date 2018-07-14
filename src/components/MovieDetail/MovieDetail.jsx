/* eslint-disable react/forbid-prop-types */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ImgSlider from 'components/ImgSlider';
import HeroCover from './HeroCover';
import SuggestMovies from './SuggestMovies';
// import MovieInside from './MovieInside';

const StyledMovieDetail = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SubMovieInfo = styled.aside`
  width: 70%;
`;

const TieBanner = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 360px;
  background: url(${({ img } = this.props) => `${img}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  z-index: -1;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const MovieDetail = ({ movie, suggest }) => (
  <StyledMovieDetail>
    <HeroCover movie={movie} />
    <TieBanner img={`https://i.ytimg.com/vi_webp/${movie.yt_trailer_code}/maxresdefault.webp`}>
      <Overlay />
    </TieBanner>
    <ImgSlider
      img1={movie.large_screenshot_image1}
      img2={movie.large_screenshot_image2}
      img3={movie.large_screenshot_image3}
      movieTitle={movie.movieTitle}
    />
    <SubMovieInfo>
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
