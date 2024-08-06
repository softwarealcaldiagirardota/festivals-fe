import styled from "@emotion/styled";
import { palette } from "../../../../theme";

const StyledContainerTotalCards = styled("div")(() => ({
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "flex-start",
  flexWrap: "wrap" as const,
  justifyContent: "space-between",
  width: "100%",
  height: "150px",
  padding: "20px",
  background: palette.neutral.W,
  borderRadius: "8px",
  position: "relative" as const,
}));

const StyledTexts = styled("div")(() => ({
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "60%",
  padding: "0 20px",
}));

const StyledCircle = styled("div")(() => ({
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "center",
  flexWrap: "wrap" as const,
  justifyContent: "space-between",
  width: "40%",
  padding: "0 20px",
}));

export { StyledContainerTotalCards, StyledTexts, StyledCircle };
