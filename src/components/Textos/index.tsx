// src/components/Textos/index.tsx
import React from 'react';
import { StyledBox, StyledTypography } from './styles';

const Texto = () => {
    return (
        <StyledBox>
            <StyledTypography>
                When placing an order, select the option “Contactless delivery” and the courier will leave your order at the door.
            </StyledTypography>
        </StyledBox>
    );
};

export default Texto;
