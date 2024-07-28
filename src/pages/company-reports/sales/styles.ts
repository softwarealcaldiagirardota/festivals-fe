import styled from "@emotion/styled";
import { palette } from "../../../theme";

const StyledContainerSales = styled("div")(() => ({
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "center",
  flexWrap: "wrap" as const,
  justifyContent: "space-between",
  width: "100%",
  height: "30vh",
  margin: "10px 0 0 0",
}));

const StyledNumberButton = styled("div")(() => ({
  minWidth: "62%",
  height: "22%",
  border: `1px solid ${palette.primary.borderColor}`,
  backgroundColor: palette.primary.background,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "1.5%",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: palette.primary.main,
  },
}));

const Container = styled("div")(({ isMobile }: { isMobile?: boolean }) => ({
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "center",
  flexWrap: "wrap" as const,
  justifyContent: "space-between",
  width: isMobile ? "100%" : "25%",
  overflowY: "auto" as const,
}));

export { StyledContainerSales, Container, StyledNumberButton };
