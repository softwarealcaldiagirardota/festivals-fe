import styled from "@emotion/styled";
import { palette } from "../../theme";
import { Typography } from "@mui/material";

const StyledActions = styled("div")(() => ({
  position: "relative" as const,
  display: "flex",
  flexDirection: "row" as const,
  border: `1px solid ${palette.primary.borderColor}`,
  height: "100px",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
  marginBottom: "20px",
  borderRadius: "8px",
  backgroundColor: palette.neutral.W,
  cursor: "pointer",
  padding: "0 20px",
}));

const StyledBorder = styled("div")(() => ({
  position: "absolute" as const,
  left: "0",
  top: "0",
  bottom: "0",
  backgroundColor: palette.primary.main,
  width: "8px",
  borderRadius: "8px 0 0 8px",
}));

const StyledLogo = styled.img`
  height: 90px;
  width: 90px;
`;

const StyledDate = styled(Typography)(() => ({
  fontWeight: "400",
  fontSize: "16px",
  color: palette.primary.description,
  textAlign: "center" as const,
}));

export { StyledActions, StyledLogo, StyledBorder, StyledDate };
