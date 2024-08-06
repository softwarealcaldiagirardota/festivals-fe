import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { palette } from "../../../../theme";

const StyledTitle = styled(Typography)(() => ({
  fontWeight: "500",
  fontSize: "18px",
  color: palette.primary.grey,
}));

const StyledNumber = styled(Typography)(() => ({
  fontWeight: "700",
  fontSize: "28px",
  color: palette.primary.title,
}));

const StyledNumberDetail = styled(Typography)(() => ({
  fontWeight: "700",
  fontSize: "16px",
  color: palette.primary.title,
}));

export { StyledTitle, StyledNumber, StyledNumberDetail };
