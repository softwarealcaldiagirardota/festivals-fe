import { useHeader } from "../../context/header-context";
import StatusLabel from "../StatusLabel";
import { StyledHeader } from "./styles";
import Title from "../Title";
import { useAuth0 } from "@auth0/auth0-react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const { title, setOpenDrawerMenu, openDrawerMenu, isMobile } = useHeader();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleDrawerMenu = () => setOpenDrawerMenu(!openDrawerMenu);
  return (
    <StyledHeader>
      {!isMobile && <MenuIcon onClick={handleDrawerMenu} />}
      <Title type="small" text={title} />
      {isAuthenticated && (
        <StatusLabel handleClick={() => logout()} value={"Logout"} />
      )}
      {!isAuthenticated && (
        <StatusLabel handleClick={() => loginWithRedirect()} value={"Login"} />
      )}
    </StyledHeader>
  );
};

export default Header;
