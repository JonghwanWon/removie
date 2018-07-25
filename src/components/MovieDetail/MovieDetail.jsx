/* eslint-disable react/forbid-prop-types */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ImgSlider from 'components/ImgSlider';
import device from 'response';
import HeroCover from './HeroCover';
import SuggestMovies from './SuggestMovies';

const YT_PATH = 'https://i.ytimg.com/vi/';

const StyledMovieDetail = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SubMovieInfo = styled.div`
  width: 60%;
  max-width: 1200px;

  @media ${device.laptop} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Trailler = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 360px;
  margin: 0 auto;
  background: url(${({ trailer } = this.props) => `${YT_PATH}${trailer}/0.jpg`});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
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

const TrailerTitle = styled.h4`
  margin-top: 40px;
  align-self: flex-start;
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  z-index: 10;
  margin-left: 10%;
`;

const PlayButton = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-top: 60px;
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
    {movie.yt_trailer_code && (
      <Trailler trailer={movie.yt_trailer_code}>
        <TrailerTitle>
          {`${movie.title} Movie Trailer`}
        </TrailerTitle>
        <a
          href={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <PlayButton>
            <PlayIcon />
          </PlayButton>
        </a>
        <Overlay />
      </Trailler>
    )}
    <SubMovieInfo>
      {movie.large_screenshot_image1 && (
        <ImgSlider
          img1={movie.large_screenshot_image1 && movie.large_screenshot_image1}
          img2={movie.large_screenshot_image2 && movie.large_screenshot_image2}
          img3={movie.large_screenshot_image3 && movie.large_screenshot_image3}
          movieTitle={movie.movieTitle}
        />
      )}
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
