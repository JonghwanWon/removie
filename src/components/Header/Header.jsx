import React, { Component } from 'react';
import styled from 'styled-components';

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
`;

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  height: 100px;
  border-bottom: 1px solid #ccc;
`;

const StyledSearch = styled.div`
  position: ${({ scroll } = this.props) => (scroll ? 'fixed' : 'relative')};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scroll: false,
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
    const el = document.querySelector('#search');
    const pageY = window.scrollY;

    if (el.getBoundingClientRect().top <= 0) {
      this.setState({
        scroll: true,
      });
    }
    if (pageY <= 100) {
      this.setState({
        scroll: false,
      });
    }
  };

  render() {
    const { scroll } = this.state;

    return (
      <StyledHeader>
        <TopHeader>
          <Logo />
          <Hamburger />
        </TopHeader>
        <StyledSearch id="search" scroll={scroll}>
          <Search />
        </StyledSearch>
      </StyledHeader>
    );
  }
}

export default Header;
