// HomeImage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledContainer, StyledImage } from './styles'; 

//import image1 from './assets/splash-2.png'
import image1 from "../../assets/splash-2.png";
import image2 from "../../assets/splash-3.png";
import image3 from "../../assets/splash-4.png";

const HomeImage = () => {
  return (
    <StyledContainer>
      <Link to="https://www.google.com/">
        <StyledImage
          src={image1}
          alt="Descripción de la imagen"
        />
      </Link>

      <Link to="https://www.google.com/">
        <StyledImage
          src={image2}
          alt="Descripción de la imagen"
        />
      </Link>

      <Link to="https://www.google.com/">
        <StyledImage
          src={image3}
          alt="Descripción de la imagen"
        />
      </Link>
    </StyledContainer>
  );
};

export default HomeImage;
