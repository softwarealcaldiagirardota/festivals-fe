import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { palette } from "../../theme";

const StyledClientVotesView = styled.section`
  display: flex;
  justify-content: center;
  align-items: self-start;
  flex-direction: column;
`;

const StyledBoxQuestion = styled(Box)(() => ({
  border: `1px solid ${palette.primary.borderColor}`,
  marginTop: "24px",
  padding: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  backgroundColor: palette.neutral.W,
}));

const StyledBoxVoting = styled(Box)(() => ({
  "& .MuiRating-icon": {
    fontSize: "2.5rem",
    color: palette.primary.borderColor,
  },
  "& .MuiRating-iconFilled": {
    color: palette.primary.main,
  },
  "& .MuiRating-iconHover": {
    color: palette.primary.main,
  },
  marginTop: "12px",
  width: "100%",
}));

export { StyledClientVotesView, StyledBoxQuestion, StyledBoxVoting };
