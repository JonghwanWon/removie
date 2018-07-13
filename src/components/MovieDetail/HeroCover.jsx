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

const HeroCover = ({ img }) => (
  <StyledHeroCover img={img}>
    <HeroCoverOverlay />
  </StyledHeroCover>
);

HeroCover.propTypes = {
  img: PropTypes.string,
};

HeroCover.defaultProps = {
  img: '',
};

export default HeroCover;
