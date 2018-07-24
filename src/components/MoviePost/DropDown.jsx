import React from 'react';
import styled from 'styled-components';

const StyledDropDown = styled.div`
  position: relative;
  width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 12px 12px;
  background: transparent;
  color: rgb(36, 36, 36);
  transition: border 0.2s linear;
  font-size: 14px;
  font-weight: 300;
`;

const Header = styled.span``;

const DropDown = () => (
  <StyledDropDown>
    <Header>
Genres
    </Header>
    <i className="fas fa-caret-down" />
  </StyledDropDown>
);

export default DropDown;
