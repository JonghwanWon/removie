import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTitle = styled.h2`
font-size: 40px;
font-weight: 300;
margin: 0;
margin-bottom: 40px;
color #242424;
`;
const Title = ({ title }) => (
  <StyledTitle>
    {title}
  </StyledTitle>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
