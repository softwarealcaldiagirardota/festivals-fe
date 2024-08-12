import styled from "@emotion/styled";
import { palette } from "../../theme";
import { Typography } from "@mui/material";

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
  zIndex: "3",
  padding: isMobile ? "0 20px" : "0 40%",
}));

const StyledTitle404 = styled(Typography)(() => ({
  margin: "40px 0",
  fontWeight: "700",
  fontSize: "50px",
  lineHeight: "41px",
  letterSpacing: "0.4px",
  color: palette.primary.grey,
  textAlign: "center" as const,
}));

const StyledTitle404Number = styled(Typography)(() => ({
  margin: "10px 0 50px 0",
  fontWeight: "700",
  fontSize: "90px",
  lineHeight: "41px",
  letterSpacing: "0.4px",
  color: palette.primary.grey,
  textAlign: "center" as const,
}));

export { StyledSplash, StyledTitle404, StyledTitle404Number };
