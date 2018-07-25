/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import device from 'response';
import MovieList from 'components/MovieList';

const StyledSuggest = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 64px;

  @media ${device.laptop} {
    width: 80%;
  }
`;

const Heading = styled.h3`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 300;
  color: #333;
`;

const SuggestMovies = ({ movies }) => (
  <StyledSuggest>
    <Heading>
      {'Suggest Movies'}
    </Heading>
    <MovieList movies={movies} renderType="suggest" />
  </StyledSuggest>
);

SuggestMovies.propTypes = {
  movies: PropTypes.array,
};

SuggestMovies.defaultProps = {
  movies: null,
};

export default SuggestMovies;
