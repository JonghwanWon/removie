import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const imagesFolder = `${process.env.PUBLIC_URL}/asset/images/`;

const LogoSection = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 70px;
  margin-right: auto;
`;

const LogoLink = styled.div`
  display: inline-block;
  width: 100%;
  font-size: 0;
  line-height: 1;
`;

const LogoImg = styled.img`
  width: 100%;
  margin-right: auto;
`;

const Logo = () => (
  <LogoSection>
    <Link to={`${process.env.PUBLIC_URL}/`} href={`${process.env.PUBLIC_URL}/`}>
      <LogoLink>
        <LogoImg src={`${imagesFolder}do2folio.png`} alt="dodo_logo" />
      </LogoLink>
    </Link>
  </LogoSection>
);

export default Logo;
