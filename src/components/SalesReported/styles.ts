import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { palette } from "../../theme";

const StyledSalesReported = styled("div")(() => ({
  position: "relative" as const,
  display: "flex",
  justifyContent: "space-between" as const,
  alignItems: "center",
  width: "100%",
  height: "30px",
  margin: "10px 0 10px 0",
}));

const StyledSalesReportedSubtitle = styled("div")(() => ({
  position: "relative" as const,
  display: "flex",
  justifyContent: "space-between" as const,
  alignItems: "center",
  width: "100%",
  height: "30px",
  margin: "0 0 16px 0",
}));

const StyledBackArrowText = styled(Typography)(() => ({
  fontWeight: "700",
  fontSize: "26px",
  lineHeight: "8px",
  letterSpacing: "0",
  color: palette.primary.title,
}));

export {
  StyledSalesReported,
  StyledBackArrowText,
  StyledSalesReportedSubtitle,
};
