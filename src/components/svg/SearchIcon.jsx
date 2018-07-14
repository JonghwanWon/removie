import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  margin: 0 16px;
`;

const SearchIcon = () => (
  <Icon
    id="icon-search"
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
  >
    <circle
      fill="none"
      stroke="#242424"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2px"
      cx="9.92"
      cy="9.92"
      r="8.92"
    />
    <path
      fill="none"
      stroke="#242424"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2px"
      d="M16.89 16.85l5.58 5.59"
    />
  </Icon>
);

export default SearchIcon;
