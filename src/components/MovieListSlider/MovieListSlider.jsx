/* eslint-disable react/forbid-prop-types */

import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MovieList } from 'components/MoviePost';

const NextButton = styled.div`
position: absolute;
display: ${({ moveCount, posibleMove } = this.props) => (moveCount < posibleMove - 1 ? 'block' : 'none')};
top: 50%;
right: -80px;
width: 120px;
height: 120px;
border-radius: 50%;
background: rgba(255, 255, 255, 0.9);
transform: translateY(-50%);
box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
cursor: pointer
z-index: 100;

&:before {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  border-left: 20px solid #888;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  transform: translate(-35%, -50%);
}
`;

const PrevButton = styled(NextButton)`
display: ${({ moveCount } = this.props) => (moveCount !== 0 ? 'block' : 'none')}
right: 0;
left -80px;

&:before {
  border-left: 0;
  border-right: 20px solid #888;
  transform: translate(-65%, -50%);
}
`;

const MovieTrack = styled.div`
  width: 100%;
  transform: translateX(
    ${({ moveCount, moveDirection } = this.props) => (moveDirection === 'next' ? moveCount * 100 : moveCount * -100)}%
  );
  transition: transform 0.4s ease-in-out;
`;

class MovieListSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moveCount: 0,
      moveDirection: 'next',
    };
  }

  handleNext = () => {
    this.setState(prevState => ({
      moveCount: prevState.moveCount + 1,
      moveDirection: 'next',
    }));
  };

  handlePrev = () => {
    this.setState(prevState => ({
      moveCount: prevState.moveCount - 1,
      moveDirection: 'prev',
    }));
  };

  render() {
    const { limit, visibleColumn, movies } = this.props;
    const { moveCount, moveDirection } = this.state;
    const posibleMove = limit / visibleColumn;
    return (
      <Fragment>
        <NextButton
          onClick={this.handleNext}
          posibleMove={posibleMove}
          moveCount={moveCount}
          moveDirection={moveDirection}
        />
        <PrevButton
          onClick={this.handlePrev}
          posibleMove={posibleMove}
          moveCount={moveCount}
          moveDirection={moveDirection}
        />
        <MovieTrack moveCount={moveCount}>
          <MovieList movies={movies} wrap={false} isLongTitle visibleColumn={visibleColumn} />
        </MovieTrack>
      </Fragment>
    );
  }
}

MovieListSlider.propTypes = {
  movies: PropTypes.array.isRequired,
  limit: PropTypes.number,
  visibleColumn: PropTypes.number,
};

MovieListSlider.defaultProps = {
  limit: 20,
  visibleColumn: 5,
};
export default MovieListSlider;
