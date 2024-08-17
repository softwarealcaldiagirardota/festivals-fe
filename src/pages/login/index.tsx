import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, isLoading, user, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      isAuthenticated &&
      !isLoading &&
      (user?.email === "admin@festival.com" ||
        user?.email === "resultados@festival.com")
    )
      navigate("/dashboard");
    if (
      isAuthenticated &&
      !isLoading &&
      user?.email !== "admin@festival.com" &&
      user?.email !== "resultados@festival.com"
    )
      navigate("/company-reports");
  }, [isAuthenticated, isLoading, user]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    if (!(Array.from(searchParams).length > 0)) loginWithRedirect();
  }, [location]);

  if (!isAuthenticated && !user?.email)
    return <div>Inicia sesión para continuar</div>;
};

export default Login;
