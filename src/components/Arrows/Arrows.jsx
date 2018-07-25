import styled from 'styled-components';

const NextButton = styled.div`
  position: absolute;
  top: 50%;
  right: -30px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 100;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 40%;
    width: 20px;
    height: 20px;
    border-right: 4px solid #242424;
    border-bottom: 4px solid #242424;
    border-radius: 4px;
    transform-origin: center;
    transform: translateY(-50%) rotate(315deg);
  }
`;

const PrevButton = styled(NextButton)`
  right: auto;
  left: -30px;

  &:after {
    left: auto;
    right: 40%;
    transform: translateY(-50%) rotate(135deg);
  }
`;

export { NextButton, PrevButton };
