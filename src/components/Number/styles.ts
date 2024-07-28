import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { palette } from "../../theme";

const StyledNumber = styled(Typography)(() => ({
  fontWeight: "700",
  fontSize: "70px",
  lineHeight: "73px",
  letterSpacing: "0.41px",
  color: palette.primary.title,
  width: "100%",
  height: "70px",
  borderRadius: "8px",
  backgroundColor: palette.neutral.W,
}));

export { StyledNumber };
