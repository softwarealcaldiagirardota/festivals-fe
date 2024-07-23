import { StyledLogo, StyledSplash } from "./styles";
import logo from "../../assets/logo-white-white.png";
import logoBlack from "../../assets/logo-white-black.png";

import { useEffect, useState } from "react";

const arrayImages = [logo, logoBlack];
const Splash = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (currentImageIndex >= arrayImages.length) {
      setCurrentImageIndex(0);
    }
  }, [currentImageIndex]);

  return (
    <StyledSplash>
      <StyledLogo src={arrayImages[currentImageIndex]} alt="Logo" />
    </StyledSplash>
  );
};

export default Splash;
