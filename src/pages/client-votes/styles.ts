import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { palette } from "../../theme";

const StyledClientVotesView = styled("section")(
  ({ isMobile }: { isMobile?: boolean }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as const,
    width: isMobile ? "100%" : "25%",
  })
);

const StyledBoxQuestion = styled(Box)(() => ({
  border: `1px solid ${palette.primary.borderColor}`,
  width: "100%",
  margin: "24px 0",
  padding: "12px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  backgroundColor: palette.neutral.W,
}));

const StyledBoxVoting = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiRating-icon": {
    fontSize: "3.5rem",
    color: palette.primary.borderColor,
  },
  "& .MuiRating-iconFilled": {
    color: palette.primary.star,
  },
  "& .MuiRating-iconHover": {
    color: palette.primary.star,
  },
  marginTop: "12px",
  width: "100%",
}));

export { StyledClientVotesView, StyledBoxQuestion, StyledBoxVoting };
