import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { palette } from "../../theme";

const StyledBackArrow = styled("div")(() => ({
  position: "relative" as const,
  display: "flex",
  justifyContent: "center" as const,
  alignItems: "center",
  width: "100%",
  height: "30px",
  marginBottom: "10px",
  cursor: "pointer",
}));

const StyledBackArrowText = styled(Typography)(() => ({
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "41px",
  letterSpacing: "0.4px",
  color: palette.primary.title,
}));

export { StyledBackArrow, StyledBackArrowText };
