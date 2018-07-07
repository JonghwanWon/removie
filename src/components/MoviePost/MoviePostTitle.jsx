import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = styled.h2`
  align-self: center;
  margin-top: 32px;
  margin-bottom: 40px;
  text-transform: Capitalize;
  font-size: 36px;
  font-weight: 300;
`;

const MoviePostTitle = ({ genre }) => (
  <StyledTitle>
    {genre !== '' ? `${genre} Movies` : 'Choose your favorite movie genre'}
  </StyledTitle>
);

MoviePostTitle.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default MoviePostTitle;
