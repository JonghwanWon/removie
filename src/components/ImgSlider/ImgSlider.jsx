import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledImgSlider = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const ImgSlider = ({ source, title }) => {
  const settings = {
    customPaging(i) {
      return (
        <a>
          <img src={source[i]} alt={`${title} screenshot_thumbnail`} style={{ width: '100%' }} />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledImgSlider>
      <Slider {...settings}>
        {source.map(img => <img key={Math.random()} src={img} alt={`${title} screenshot`} />)}
      </Slider>
    </StyledImgSlider>
  );
};

ImgSlider.propTypes = {
  source: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default ImgSlider;
