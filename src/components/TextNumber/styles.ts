import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { palette } from "../../theme";

const StyledTextNumber = styled(Typography)(
  () => ({
    fontWeight: "400",
    fontSize:  "17px",
    lineHeight: "22px",
    letterSpacing: "0.41px",
    color: palette.primary.description,
  })
);

export { StyledTextNumber };
