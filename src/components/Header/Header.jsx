import React from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import Logo from './Logo';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  height: 100px;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <Hamburger />
  </StyledHeader>
);

export default Header;
