import { styled } from "@mui/material";
import { palette } from "../../theme";

const StyledNumberButton = styled("div")(() => ({
  width: "30%",
  height: "30%",
  border: `1px solid ${palette.primary.borderColor}`,
  backgroundColor: palette.primary.background,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export { StyledNumberButton };
