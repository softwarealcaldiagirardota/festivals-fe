import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import { palette } from "../../theme";

const ButtonStyled = styled(Button)(
  ({ isOutlined }: { isOutlined?: boolean }) => ({
    width: "100%",
    height: "56px",
    borderRadius: "18px",
    color: isOutlined ? palette.neutral.white["0"] : palette.primary.main,
    border: "none",
  })
);

const StyledButton = styled(Typography)({
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "18px",
  letterSpacing: "-0.1px",
  textAlign: "center",
  textTransform: "none",
});

export { ButtonStyled, StyledButton };
