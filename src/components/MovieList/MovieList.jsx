/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SliderItem, ListItem, SuggestItem } from 'components/MovieItem';
import { NextButton, PrevButton } from 'components/Arrows';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const StyledMovieList = styled.ul`
  position: relative;
  width: 100%;
  margin-bottom: 24px;
  ${({ flex } = this.props) => flex && 'display: flex; flex-wrap: wrap;'};
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
          settings: {
            slidesToShow: 2,
            arrows: false,
            swipeToSlide: true,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            arrows: false,
            swipeToSlide: true,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const { movies, renderType } = this.props;
    const isFlex = target => target !== 'slider';

    return (
      movies && (
        <StyledMovieList flex={isFlex(renderType)}>
          {renderType === 'slider' && (
            <Slider
              {...settings}
              ref={(c) => {
                this.slider = c;
              }}
            >
              {movies.map(movie => <SliderItem movie={movie} key={movie.id} />)}
            </Slider>
          )}
          {renderType === 'list' && movies.map(movie => <ListItem movie={movie} key={movie.id} />)}
          {renderType === 'suggest'
            && movies.map(movie => <SuggestItem movie={movie} key={movie.id} />)}
        </StyledMovieList>
      )
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
  renderType: PropTypes.string.isRequired,
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
