import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Splash from "../../components/Splash";

const Login = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  console.log("***isLoading", isLoading);
  console.log("***isAuthenticated", isAuthenticated);
  console.log("***user", user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && !isLoading && user?.email === "admin@festival.com")
      navigate("/dashboard");
    if (isAuthenticated && !isLoading && user?.email !== "admin@festival.com")
      navigate("/company-reports");
  }, [isAuthenticated, isLoading, user]);

  if (!isAuthenticated && isLoading && !user) return <div>Cargando...</div>;

  if (!isAuthenticated && !user?.email)
    return <div>Inicia sesión para continuar</div>;

  return <Splash />;
};

export default Login;
