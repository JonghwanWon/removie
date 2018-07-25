import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import device from 'response';

const StyledImgSlider = styled.div`
  width: 100%;
  margin-top: 60px;

  & > img {
    width: 100%;
  }

  @media ${device.laptop} {
    margin-top: 32px;
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
