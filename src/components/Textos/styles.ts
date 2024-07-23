// src/components/Textos/styles.ts
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const StyledBox = styled(Box)({
    width: 374,
    height: 79,
    position: 'absolute',
    top: 609,
    left: 21,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const StyledTypography = styled(Typography)({
    fontWeight: 400,
    fontSize: 17,
    lineHeight: '25.5px',
    letterSpacing: '-0.41px',
    color: '#9586A8',
    textAlign: 'center',
});
