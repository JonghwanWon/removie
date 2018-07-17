/* eslint-disable react/forbid-prop-types */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ImgSlider from 'components/ImgSlider';
import HeroCover from './HeroCover';
import SuggestMovies from './SuggestMovies';
import MovieInside from './MovieInside';

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1920px;
  height: 360px;
  background: url(${({ img } = this.props) => `${img}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const TieBannerTitle = styled.h4`
  position: absolute;
  top: 10%;
  left: 20%;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  z-index: 10;
`;

const PlayButton = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  cursor: pointer;
  z-index: 10;
`;

const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-left: 30px solid #fff;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  transform: translate(-35%, -50%);
`;

const MovieDetail = ({ movie, suggest }) => (
  <StyledMovieDetail>
    <HeroCover movie={movie} />
    {/* https://i.ytimg.com/vi_webp/${movie.yt_trailer_code}/maxresdefault.webp */}
    <TieBanner img={`https://i.ytimg.com/vi/${movie.yt_trailer_code}/maxresdefault.jpg`}>
      <TieBannerTitle>
        {`${movie.title} Movie Trailer`}
      </TieBannerTitle>
      <PlayButton>
        <PlayIcon />
      </PlayButton>
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
    <MovieInside
      movieTitle={movie.title}
      trailer={movie.yt_trailer_code}
      img1={movie.large_screenshot_image1}
      img2={movie.large_screenshot_image2}
      img3={movie.large_screenshot_image3}
    />
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
