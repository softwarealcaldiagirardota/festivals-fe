import { styled } from "@mui/material";
import { palette } from "../../theme";

const StyledNumberButton = styled("div")(({ noData }: { noData: boolean }) => ({
  minWidth: "28%",
  height: "18%",
  border: `1px solid ${palette.primary.borderColor}`,
  backgroundColor: palette.primary.background,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 1.5%",
  borderRadius: "8px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: palette.primary.main,
  },
  ...(noData && { opacity: 0.5, pointerEvents: "none" }),
}));

export { StyledNumberButton };
