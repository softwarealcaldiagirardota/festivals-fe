import { StyledFooterMenu, StyledIconContainer, StyledTexMenu } from "./styles";
import { useHeader } from "../../context/header-context";
import { menuItems } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { isMobile, showLoginButton } = useHeader();
  const navigate = useNavigate();
  const handleNavigate = (url: string) => navigate(url);
  if (!isMobile) return null;

  if (!showLoginButton) return null;
  return (
    <StyledFooterMenu>
      {menuItems.map((item, index) => (
        <StyledIconContainer
          key={index}
          onClick={handleNavigate.bind(null, item.url)}
        >
          {item.icon}
          <StyledTexMenu>{item.label}</StyledTexMenu>
        </StyledIconContainer>
      ))}
    </StyledFooterMenu>
  );
};

export default Footer;
