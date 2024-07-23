// src/components/Textos/styles.ts
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const StyledBox = styled(Box)({
    width: 174,
    height: 41,
   
    top: 97,
    left: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const StyledTypography = styled(Typography)({
    fontWeight: 700,
    fontSize: 34,
    lineHeight: '41px',
    letterSpacing: '0.41px',
    color: '#2D0C57',
    textAlign: 'center',
});
