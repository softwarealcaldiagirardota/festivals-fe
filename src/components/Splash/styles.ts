import styled, { keyframes } from "styled-components";
import { palette } from "../../theme";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledSplash = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${() => palette.primary.backgroundBlueFestivalChicharron};
  z-index: 2;
`;

const StyledLogo = styled.img`
  // width: 300px;
  height: 15%;
  animation: ${pulse} 1s infinite; /* Aplica la animación */
`;

export { StyledSplash, StyledLogo };
