import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { palette } from "../../theme";

const StyledNumber = styled(Typography)(() => ({
  fontWeight: "400",
  fontSize: "32px",
  lineHeight: "42px",
  letterSpacing: "1px",
  color: palette.primary.title,
  width: "100%",
  height: "40px",
  borderRadius: "8px",
  backgroundColor: palette.neutral.W,
}));

export { StyledNumber };
