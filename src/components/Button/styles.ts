import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';

const ButtonStyled = styled(Button)(({ theme }) => ({
  width: 260.79,
  height: 56,
  padding: 8,
  // Remove conflicting position styles
}));

const StyledTypography = styled(Typography)({
  fontWeight: 600,
  fontSize: 15,
  lineHeight: 18,
  letterSpacing: '-0.1px',
  textAlign: 'center',
});

export { ButtonStyled, StyledTypography };
