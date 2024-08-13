import { StyledContainer, StyledImage } from './styles';
import propuestaDesktop from '../../assets/404-error-page.png';
import propuestaMobile from '../../assets/404-error-pageMobile.png';
import { useHeader } from '../../context/header-context';

const SingleImage = () => {
  const { isMobile } = useHeader();
  const isMobileValue = isMobile ?? false; 

  return (
    <StyledContainer>
      <StyledImage
        isMobile={isMobileValue} 
        src={isMobileValue ? propuestaMobile : propuestaDesktop}
        alt="Participantes feria del chicharrón Girardota"
      />
    </StyledContainer>
  );
};

export default SingleImage;
