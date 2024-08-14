import { useHeader } from "../../context/header-context";
import StatusLabel from "../StatusLabel";
import { StyledHeader } from "./styles";
import Title from "../Title";
import { useAuth0 } from "@auth0/auth0-react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const {
    title,
    setOpenDrawerMenu,
    openDrawerMenu,
    isMobile,
    showLoginButton,
  } = useHeader();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const handleDrawerMenu = () => setOpenDrawerMenu(!openDrawerMenu);
  const navigate = useNavigate();

  return (
    <>
      {(showLoginButton || window.location.pathname === "/client-votes") && (
        <StyledHeader>
          {!isMobile && showLoginButton && (
            <MenuIcon onClick={handleDrawerMenu} />
          )}
          <Title type="small" text={title} />
          {isAuthenticated && (
            <StatusLabel handleClick={() => logout()} value={"Logout"} />
          )}
          {!isAuthenticated && showLoginButton && (
            <StatusLabel
              handleClick={() => loginWithRedirect()}
              value={"Login"}
            />
          )}
          {title === "Verificar código" && !isAuthenticated && (
            <StatusLabel handleClick={() => navigate("home")} value={"Home"} />
          )}
        </StyledHeader>
      )}
    </>
  );
};

export default Header;
