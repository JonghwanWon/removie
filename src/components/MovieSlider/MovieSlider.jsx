/* eslint-disable react/forbid-prop-types */

import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

const StyledMovieSlider = styled.ul`
  width: 100%;
`;

class MovieSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const settings = {
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,

      arrows: false,
      infinite: false,
      slide: 'li',
    };

    const { movies } = this.props;
    return (
      <StyledMovieSlider>
        <button type="button" onClick={() => this.slider.slickPrev()}>
          prev
        </button>
        <button type="button" onClick={() => this.slider.slickNext()}>
          next
        </button>
        <Slider
          {...settings}
          ref={(c) => {
            this.slider = c;
          }}
        >
          {movies ? movies.map(movie => <MovieItem movie={movie} key={movie.id} />) : null}
        </Slider>
      </StyledMovieSlider>
    );
  }
}

MovieSlider.propTypes = {
  movies: PropTypes.array,
};

MovieSlider.defaultProps = {
  movies: [],
};

export default MovieSlider;
