import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading, user, getAccessTokenSilently } =
    useAuth0();

  console.log("***user", user);

  const getToken = async () => {
    const token = await getAccessTokenSilently();
    console.log("***token", token);
  };

  useEffect(() => {
    getToken();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
