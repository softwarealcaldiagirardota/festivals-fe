import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { palette } from "../../theme";

const StyledStatusLabel = styled(Typography)(() => ({
  fontWeight: "600",
  fontSize: "15px",
  lineHeight: "18px",
  letterSpacing: "-0.009",
  color: palette.primary.statusLabel,
  textTransform: "uppercase" as const,
}));

export { StyledStatusLabel };
