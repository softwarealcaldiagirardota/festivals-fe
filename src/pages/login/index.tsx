import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Splash from "../../components/Splash";

const Login = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading && user?.email === "admin@festival.com")
      navigate("/dashboard");
    if (isAuthenticated && !isLoading && user?.email !== "admin@festival.com")
      navigate("/company-reports");
    // navigate("/client-votes");
  }, [isAuthenticated, isLoading, user]);
  if (!isAuthenticated && !isLoading)
    return <div>Inicia sesión para continuar</div>;
  return <Splash />;
};

export default Login;
