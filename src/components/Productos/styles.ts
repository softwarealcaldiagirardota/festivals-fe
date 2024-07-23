// src/components/Textos/styles.ts
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const StyledBox = styled(Box)({
    width: 145,
    height: 20,
  
    top: 150,
    left: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const StyledTypography = styled(Typography)({
    fontFamily: "'SF Pro Text', sans-serif",
    fontWeight: 700,
    fontSize: 18,
    lineHeight: '21.9px',
    letterSpacing: '-0.41px',
    color: '#2D0C57',
    textAlign: 'center',
});
