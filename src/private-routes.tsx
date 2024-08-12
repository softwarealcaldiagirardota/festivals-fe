import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Splash from "./components/Splash";

interface PrivateRouteProps {
  children: JSX.Element;
  setAuth0Token: React.Dispatch<React.SetStateAction<string>>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  setAuth0Token,
}) => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const getToken = async () => {
    const token = await getAccessTokenSilently();
    setAuth0Token(token || "");
  };

  useEffect(() => {
    getToken();
  }, []);
  if (isLoading) {
    return <Splash />;
  }

  return isAuthenticated && !isLoading ? children : <Navigate to="/" />;
};

export default PrivateRoute;
