import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledButton = styled.button.attrs({
  type: 'button',
})`
  padding: 20px 40px;
  border: 1px solid #242424;
  border-radius: 10px;
  font-weight: 300;
  font-size: 15px;
  color: #242424;
  transition: all 0.2s ease-in-out;
  background: transparent;
  outline: none;
  &:hover {
    background: #242424;
    color: #fff;
    cursor: pointer;
  }
`;

const Button = ({ value, to, href }) => (
  <Link to={to} href={href}>
    <StyledButton>
      {value}
    </StyledButton>
  </Link>
);

Button.propTypes = {
  value: PropTypes.string,
  to: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

Button.defaultProps = {
  value: 'View More',
};
export default Button;
