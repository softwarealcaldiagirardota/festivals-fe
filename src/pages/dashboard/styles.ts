import styled from "@emotion/styled";

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "center",
  flexWrap: "wrap" as const,
  justifyContent: "space-between",
  width: "100%",
  overflowY: "auto" as const,
}));

export { Container };
