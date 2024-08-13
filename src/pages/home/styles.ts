
import styled from '@emotion/styled';
import { Box } from '@mui/material';


export const StyledContainer = styled(Box)(
 ({ isMobile }: { isMobile?: boolean }) =>({
 
  
  width: isMobile ? '100%' : '400px', 
  height: isMobile ? '100%' : '100%',
  overflow: 'auto',
  border: '1px solid #ccc',
  gap: isMobile ? '10px' : '50px', 
})
);

export const StyledImage = styled('img')(
    ({ isMobile }: { isMobile?: boolean }) => ({
      width: isMobile ? '100%' : '400px', 
      height: isMobile ? '100%' : '100%', 
      display: 'block', 
    })
  );