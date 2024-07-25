import styled from "@emotion/styled";
import { palette } from "../../theme";

const StyledSplash = styled("div")(({ isMobile }: { isMobile?: boolean }) => ({
  position: "absolute" as const,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column" as const,
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  backgroundColor: palette.primary.background,
  zIndex: "2",
  padding: isMobile ? "0 20px" : "0 40%",
}));

const StyledLogo = styled.img`
  height: 30%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export { StyledSplash, StyledLogo };
