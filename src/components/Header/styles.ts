import styled from "@emotion/styled";
import { palette } from "../../theme";

const StyledHeader = styled.header`
  color: ${() => palette.primary.title};
  position: fixed;
  padding: 0 40px;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: ${() => palette.neutral.W};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledArrow = styled.header`
  color: ${() => palette.primary.title};
  font-size: 20px;
`;

export { StyledHeader, StyledArrow };
