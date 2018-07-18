import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSlide = styled.li`
  width: 30%
  order: ${({ order } = this.props) => order};
  ${({ order } = this.props) => {
    switch (order) {
      case 0:
        return 'position: absolute; top: 50%; left:50%; width: 40%; opacity: 0; z-index: 300; transform-origin:center; transform: translateY(-50%) scale(1.2); transition: all 0.4s 0s ease;';
      case 1:
        return 'position: absolute; top: 50%; left: 50%; width: 40%; opacity: 1; z-index: 100; transform-origin:center; transform: translateY(-50%); transition: all 0.5s 0s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.7);';
      case 2:
        return 'position: absolute; top: 50%; left: 30%; width: 35%; opacity: 1; z-index: 50; transform-origin:center; transform: translateY(-50%) matrix3d(1,0,0,0.0005,0,1,0,0,0,0,1,0,0,0,0,1); transition: all 0.5s 0s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.55);';
      case 3:
        return 'position: absolute; top: 50%; left: 10%; opacity: 1; z-index:10; transform-origin:center; transform: translateY(-50%) matrix3d(1,0,0,0.0008,0,1,0,0,0,0,1,0,0,0,0,1); transition: all 0.5s 0s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.45);';
      case 4:
        return 'position: absolute; top: 50%; left: 5%; opacity: 0; z-index:1; transform-origin:center; transform: translateY(-50%); transition: all 0.5s 0s ease; box-shadow: 0 3px 10px rgba(0,0,0,0.45);';
      default:
        return 'position: absolute; top: 50%; left: 0; opacity: 0; transform-origin:center; transform: translateY(-50%);transition: all 0.5s 0s ease; box-shadow: 0 2px 10px rgba(0,0,0,0.35);';
    }
  }}

`;

const Poster = styled.img.attrs({
  src: props => props.moviePoster,
  alt: props => `${props.movieTitle} poster`,
})`
  display: block;
  width: 100%;

  object-fit: cover;
  object-position: center;
`;

const Slide = ({
  active, order, sliding, poster, title,
}) => (
  <StyledSlide active={active} order={order} sliding={sliding}>
    <Poster moviePoster={poster} movieTitle={title} />
  </StyledSlide>
);

Slide.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.number,
  order: PropTypes.number.isRequired,
  sliding: PropTypes.bool,
};

Slide.defaultProps = {
  active: PropTypes.null,
  sliding: PropTypes.false,
};

export default Slide;
