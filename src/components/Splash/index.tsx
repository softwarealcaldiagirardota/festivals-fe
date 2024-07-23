import { StyledLogo, StyledSplash } from "./styles";
import logo from "../../assets/logo-white-white.png";
import logoBlack from "../../assets/logo-white-black.png";
import splash1 from "../../assets/splash-1.png";
import splash2 from "../../assets/splash-2.png";
import { useEffect, useState } from "react";

const arrayImages = [logo, splash1, splash2, logoBlack];
const Splash = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 1250);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 5000);

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
