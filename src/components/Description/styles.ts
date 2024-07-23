import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { palette } from "../../theme";

const StyledDescription = styled(Typography)(
  ({ isSmall }: { isSmall?: boolean }) => ({
    fontWeight: "400",
    fontSize: isSmall ? "16px" : "17px",
    lineHeight: "22px",
    letterSpacing: "0.41px",
    color: palette.primary.description,
  })
);

export { StyledDescription };
