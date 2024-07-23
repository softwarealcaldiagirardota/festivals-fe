import { Button } from '@mui/material';

const ButtonMaterial = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        fontFamily: "'San Francisco', Helvetica, Arial, sans-serif", // Set font stack
        color: '#fff', // Set text color (optional)
        border: '1px solid #000000', // Set border color (optional)
      }}
    >
      <span style={{ textTransform: 'none' }}>ORDER NOW </span>
    </Button>
  );
};

export default ButtonMaterial;
