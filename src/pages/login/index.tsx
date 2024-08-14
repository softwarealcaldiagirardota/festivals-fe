import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHeader } from "../../context/header-context";

const Login = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading && user?.email === "admin@festival.com")
      navigate("/dashboard");
    if (isAuthenticated && !isLoading && user?.email !== "admin@festival.com")
      navigate("/company-reports");
  }, [isAuthenticated, isLoading, user]);

  if (!isAuthenticated && !user?.email)
    return <div>Inicia sesión para continuar</div>;
};

export default Login;
