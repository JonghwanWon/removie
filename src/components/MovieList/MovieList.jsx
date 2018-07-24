/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SliderItem, ListItem } from 'components/MovieItem';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const StyledMovieList = styled.ul`
  position: relative;
  width: 100%;
  margin-bottom: 24px;
  ${({ renderType } = this.props) => (renderType === 'list' ? 'display: flex; flex-wrap: wrap;' : null)};
`;

const NextButton = styled.div`
  position: absolute;
  top: 50%;
  right: -30px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 100;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 45%;
    border-left: 20px solid #444;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    transform: translateY(-50%);
  }
`;

const PrevButton = styled(NextButton)`
  right: auto;
  left: -30px;

  &:after {
    left: auto;
    right: 45%;
    border-left: none;
    border-right: 20px solid #444;
  }
`;

const NextArrow = (props) => {
  const { onClick } = props;

  NextArrow.propTypes = {
    onClick: PropTypes.func,
  };

  NextArrow.defaultProps = {
    onClick: null,
  };

  return <NextButton onClick={onClick} />;
};

const PrevArrow = (props) => {
  const { onClick } = props;

  PrevArrow.propTypes = {
    onClick: PropTypes.func,
  };

  PrevArrow.defaultProps = {
    onClick: null,
  };

  return <PrevButton onClick={onClick} />;
};

class MovieList extends Component {
  render() {
    const settings = {
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      infinite: false,
      slide: 'li',
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1440,
          settings: { slidesToShow: 4, slidesToScroll: 4 },
        },
        {
          breakpoint: 1024,
          settings: { slidesToShow: 3, slidesToScroll: 3 },
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2.5, slidesToScroll: 2.5, arrows: false },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1.5,
            arrows: false,
          },
        },
      ],
    };

    const { movies, renderType } = this.props;

    return movies ? (
      <StyledMovieList renderType={renderType}>
        {renderType === 'slider' ? (
          <Slider
            {...settings}
            ref={(c) => {
              this.slider = c;
            }}
          >
            {movies.map(movie => <SliderItem movie={movie} key={movie.id} />)}
          </Slider>
        ) : null}

        {renderType === 'list'
          ? movies.map(movie => <ListItem movie={movie} key={movie.id} />)
          : null}
      </StyledMovieList>
    ) : null;
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  renderType: PropTypes.string.isRequired,
};

export default MovieList;
