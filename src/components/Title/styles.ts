import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { palette } from "../../theme";

const StyledTitle = styled(Typography)(
  ({ isSubtitle }: { isSubtitle?: boolean }) => ({
    fontWeight: "700",
    fontSize: isSubtitle ? "30px" : "34px",
    lineHeight: "41px",
    letterSpacing: "0.4px",
    color: palette.primary.title,
  })
);

export { StyledTitle };
