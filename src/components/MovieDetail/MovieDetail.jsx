/* eslint-disable react/forbid-prop-types */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import ImgSlider from 'components/ImgSlider';
import HeroCover from './HeroCover';
import SuggestMovies from './SuggestMovies';

const StyledMovieDetail = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SubMovieInfo = styled.aside`
  width: 50%;
  max-width: 1200px;
`;

const ParallaxContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 360px;
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

const MovieDetail = ({ movie, suggest }) => {
  const YT_PATH = 'https://i.ytimg.com/vi/';
  const IMAGE_PATH = `${process.env.PUBLIC_URL}/asset/images/`;
  return (
    <StyledMovieDetail>
      <HeroCover movie={movie} />
      <div style={{ width: '100%' }}>
        <Parallax
          bgImage={
            movie.yt_trailer_code
              ? `${YT_PATH}${movie.yt_trailer_code}/0.jpg`
              : `${IMAGE_PATH}coming-soon.png`
          }
          bgWidth="100%"
          bgHeight="auto"
          strength={-600}
        >
          <ParallaxContent>
            <TieBannerTitle>
              {`${movie.title} Movie Trailer`}
            </TieBannerTitle>
            <PlayButton>
              <PlayIcon />
            </PlayButton>
            <Overlay />
          </ParallaxContent>
        </Parallax>
      </div>
      <SubMovieInfo>
        <ImgSlider
          img1={movie.large_screenshot_image1}
          img2={movie.large_screenshot_image2}
          img3={movie.large_screenshot_image3}
          movieTitle={movie.movieTitle}
        />
        <SuggestMovies movies={suggest} />
      </SubMovieInfo>
    </StyledMovieDetail>
  );
};

MovieDetail.propTypes = {
  movie: PropTypes.object.isRequired,
  suggest: PropTypes.array,
};

MovieDetail.defaultProps = {
  suggest: null,
};

export default MovieDetail;
