import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { theme, colors } from "../../theme";

export const ButtonSyled = styled(Button)(() => ({
  width: "138px",
  height: "40px",
  padding: "8px !important",
  position: "absolute",
  bottom: "24px",
  right: "40px",
}));
