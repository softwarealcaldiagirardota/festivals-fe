import styled from "@emotion/styled";
import { palette } from "../../../../theme";
import { Typography } from "@mui/material";

const StyledContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "100%",
  padding: "20px",
  background: palette.neutral.W,
  borderRadius: "8px",
  position: "relative" as const,
  height: "500px",
  overflowY: "auto" as const,
}));

const StyledContainerItem = styled("div")(() => ({
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "flex-start",
  flexWrap: "wrap" as const,
  justifyContent: "space-between",
  width: "100%",
  height: "30px",
  marginTop: "30px",
  boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.15)",
  padding: "0 10px",
}));

const StyledContainerItemName = styled("div")(() => ({
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "center",
  flexWrap: "wrap" as const,
  justifyContent: "flex-start",
  width: "50%",
  height: "30px",
}));

const StyledContainerItemValue = styled("div")(() => ({
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "center",
  justifyContent: "space-around",
  width: "50%",
  height: "30px",
}));

const StyledTitle = styled(Typography)(() => ({
  fontWeight: "500",
  fontSize: "18px",
  color: palette.primary.title,
}));

export {
  StyledContainer,
  StyledContainerItem,
  StyledContainerItemName,
  StyledContainerItemValue,
  StyledTitle,
};
