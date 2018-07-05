import React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HamburgerIcon = styled.span`
  position: relative;
  width: 12px;
  height: 1px;
  background-color: #000;
  margin-right: 8px;
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #000;
  }
  &:before {
    top: -6px;
  }
  &:after {
    bottom: -6px;
  }
`;

const HamburgerText = styled.a`
  font-size: 16px;
  color: #242424;
`;

const Hamburger = () => (
  <StyledHamburger>
    <HamburgerIcon />
    <HamburgerText>
      {'Menu'}
    </HamburgerText>
  </StyledHamburger>
);
export default Hamburger;
