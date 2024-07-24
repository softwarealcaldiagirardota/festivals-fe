import { Stepper, styled } from "@mui/material";
import { palette } from "../../theme";

export const CustomStepper = styled(Stepper)(() => ({
  "& .MuiStepIcon-root": {
    width: 38,
    height: 38,
    color: palette.primary.borderColor,
    "&.Mui-active": {
      color: palette.primary.main,
    },
    "&.Mui-completed": {
      color: palette.primary.main,
    },
  },
  "& .MuiStepLabel-label": {
    fontSize: "1rem",
    color: palette.neutral.B,
    "&.Mui-completed": {
      color: palette.primary.main,
    },
    "&.Mui-active": {
      color: palette.neutral.B,
    },
  },
  "& .MuiStepConnector-line": {
    borderColor: palette.primary.borderColor,
    borderTopWidth: 2,
  },
}));
