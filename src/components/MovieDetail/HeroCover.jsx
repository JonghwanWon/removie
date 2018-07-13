import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeroCover = styled.div`
  position: absolute;
  top: 170px;
  left: 0;
  width: 100%;
  height: 750px;
  z-index: -1;
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

const HeroCoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const HeroCover = ({ img, movieTitle }) => (
  <StyledHeroCover>
    <HeroCoverOverlay />
    <HeroCoverImage src={img} alt={`${movieTitle} background`} />
  </StyledHeroCover>
);

HeroCover.propTypes = {
  img: PropTypes.string,
  movieTitle: PropTypes.string,
};

HeroCover.defaultProps = {
  img: '',
  movieTitle: '',
};

export default HeroCover;
