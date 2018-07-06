import React from 'react';
import { ScaleLoader } from 'react-spinners';
import styled from 'styled-components';

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 150px 0;
`;
const Spinner = () => (
  <StyledSpinner>
    <ScaleLoader width={5} color="rgb(237,237,237)" />
  </StyledSpinner>
);

export default Spinner;
