import React from 'react';
import { BeatLoader } from 'react-spinners';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Spinner2 = () => (
  <StyledSpinner>
    <BeatLoader color="rgb(237, 237, 237)" />
  </StyledSpinner>
);

export default Spinner2;
