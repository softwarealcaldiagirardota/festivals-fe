import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center", 
  justifyContent: "center", 
  width: "100%",
  height: "100vh", 
  position: "absolute",
  right: 0,
  left: 0,
  top: 0,
  bottom: 0,
  zIndex: 10,
});


export const StyledImage = styled("img")<{ isMobile: boolean }>(({ isMobile }) => ({
  width: isMobile ? "70vw" : "20vw", 
  height: "auto", 
  display: "block",
}));