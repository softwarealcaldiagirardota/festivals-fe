import styled from "@emotion/styled";
import { palette } from "../../theme";

const StyledHeader = styled.header`
  color: ${() => palette.primary.title};
  position: fixed;
  z-index: 2;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${() => palette.neutral.W};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledArrow = styled.div`
  color: ${() => palette.primary.title};
  font-size: 20px;
`;

export { StyledHeader, StyledArrow };
