// src/components/Textos/styles.ts
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { palette } from "../../theme";

const StyledNumber = styled(Typography)(() => ({
  fontWeight: "700",
  fontSize: "22px",
  lineHeight: "22px",
  letterSpacing: "0.41px",
  color: palette.primary.title,
}));

export { StyledNumber };
