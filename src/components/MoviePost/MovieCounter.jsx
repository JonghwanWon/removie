import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMovieCounter = styled.span`
  margin: 16px 0;
  font-size: 21px;
  font-weight: 300;
`;

const MovieCounter = ({ count }) => (
  <StyledMovieCounter>
    {`Total : ${count}`}
  </StyledMovieCounter>
);

MovieCounter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default MovieCounter;
