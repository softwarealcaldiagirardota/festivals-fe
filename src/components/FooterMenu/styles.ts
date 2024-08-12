import styled from "@emotion/styled";
import { palette } from "../../theme";

const StyledFooterMenu = styled.footer`
  position: fixed;
  display: flex;
  z-index: 2;
  justify-content: space-evenly;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 16px 20px;
  background-color: ${() => palette.primary.background};
  border-top: 1px solid ${() => palette.primary.borderColor};
  box-shadow: 0 -6px 7px -5px rgba(0, 0, 0, 0.3);
`;

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledTexMenu = styled("span")(() => ({
  fontWeight: "400",
  fontSize: "10px",
  letterSpacing: "0.41px",
  color: palette.neutral.B,
}));

export { StyledFooterMenu, StyledIconContainer, StyledTexMenu };
