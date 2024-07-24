import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { palette } from "../../theme";

const StyledTitle = styled(Typography)(({ size }: { size: string }) => ({
  fontWeight: "700",
  fontSize: size,
  lineHeight: "41px",
  letterSpacing: "0.4px",
  color: palette.primary.title,
  textAlign: "center" as const,
}));

const StyledTitleMenu = styled(Typography)(() => ({
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "41px",
  letterSpacing: "0.4px",
  color: palette.primary.title,
}));

export { StyledTitle, StyledTitleMenu };
