import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import device from 'response';
import MovieInfo from './MovieInfo';

const StyledHeroCover = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
`;

const HeroCoverImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: url(${({ img } = this.props) => img});
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

const HeroCoverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

const StyledMovieInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 1400px;
  padding: 0 50px;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: column;
  }
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

const HeroCover = ({ movie }) => (
  <StyledHeroCover>
    <StyledMovieInfo>
      <WrapPoster>
        <MoviePoster src={movie.large_cover_image} alt={`${movie.title} poster`} />
      </WrapPoster>
      <MovieInfo movie={movie} />
    </StyledMovieInfo>
    <HeroCoverImage img={movie.background_image}>
      <HeroCoverOverlay />
    </HeroCoverImage>
  </StyledHeroCover>
);

HeroCover.propTypes = {
  movie: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default HeroCover;
