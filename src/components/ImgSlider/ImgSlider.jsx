import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImgSlider = styled.div`
  width: 100%;
  margin-top: 100px;

  & > img {
    width: 100%;
  }
`;

const ImgSlider = ({ ...imgs, movieTitle }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <StyledImgSlider>
      <Slider {...settings}>
        <img src={imgs.img1} alt={`${movieTitle} screenshot`} />
        <img src={imgs.img2} alt={`${movieTitle} screenshot`} />
        <img src={imgs.img3} alt={`${movieTitle} screenshot`} />
      </Slider>
    </StyledImgSlider>
  );
};

ImgSlider.propTypes = {
  img1: PropTypes.string,
  movieTitle: PropTypes.string,
};

ImgSlider.defaultProps = {
  img1: '',
  movieTitle: '',
};

export default ImgSlider;
