/* eslint-disable react/forbid-prop-types */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledButton = styled.button.attrs({
  type: 'button',
})`
  padding: 20px 40px;
  border: 1px solid ${({ theme } = this.props) => theme.bc};
  border-radius: 10px;
  font-weight: 300;
  font-size: 15px;
  color: ${({ theme } = this.props) => theme.tc};
  transition: all 0.2s ease-in-out;
  background: ${({ theme } = this.props) => theme.fg};
  outline: none;
  &:hover {
    background: ${({ theme } = this.props) => theme.hfg};
    color: ${({ theme } = this.props) => theme.htc};
    cursor: pointer;
  }
`;

const defaultTheme = {
  fg: '#fff',
  bc: '#242424',
  tc: '#242424',
  hfg: '#242424',
  htc: '#fff',
};

const ghost = {
  fg: 'transparent',
  bc: '#fff',
  tc: '#fff',
  hfg: '#fff',
  htc: '#242424',
};

const Button = ({
  value, to, href, theme,
}) => (
  <Link to={to} href={href}>
    <StyledButton theme={theme === 'ghost' ? ghost : defaultTheme}>
      {value}
    </StyledButton>
  </Link>
);

Button.propTypes = {
  value: PropTypes.string,
  to: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  theme: PropTypes.any,
};

Button.defaultProps = {
  value: 'View More',
  theme: defaultTheme,
};

export default Button;
