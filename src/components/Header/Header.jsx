import React, { Component } from 'react';
import styled from 'styled-components';
import device from 'response';

import Logo from './Logo';
import Hamburger from './Hamburger';
import Search from './Search';

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background: #fff;
  z-index: 9999;
  border-bottom: 1px solid #ccc;
`;

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  height: 100px;
  border-bottom: 1px solid #ccc;

  @media ${device.laptopL} {
    width: 90%;
  }
`;

const StyledSearch = styled.div`
  ${({ isScrolling } = this.props) => (isScrolling
    ? 'position: fixed; border-bottom: 1px solid #ccc;'
    : 'position: relative; border-bottom: none;')} width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.97);
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isScrolling: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return true;
    }
    if (this.state !== nextState) {
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const el = document.querySelector('#topHeader').clientHeight;
    const pageY = window.pageYOffset;
    if (pageY > el) {
      this.setState({
        isScrolling: true,
      });
    }
    if (pageY <= 100) {
      this.setState({
        isScrolling: false,
      });
    }
  };

  render() {
    const { isScrolling } = this.state;

    return (
      <StyledHeader>
        <TopHeader id="topHeader">
          <Logo />
          <Hamburger />
        </TopHeader>
        <StyledSearch isScrolling={isScrolling}>
          <Search />
        </StyledSearch>
      </StyledHeader>
    );
  }
}

export default Header;
