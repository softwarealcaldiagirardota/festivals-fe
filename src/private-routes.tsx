import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Splash from "./components/Splash";
import { messages, urlBase } from "./utils/utils";
import { useHeader } from "./context/header-context";

interface PrivateRouteProps {
  children: JSX.Element;
  setAuth0Token: React.Dispatch<React.SetStateAction<string>>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  setAuth0Token,
}) => {
  const { isAuthenticated, isLoading, getAccessTokenSilently, user } =
    useAuth0();
  const navigate = useNavigate();
  const { setCompanyData, showSnackBar } = useHeader();
  const getToken = async () => {
    const token = await getAccessTokenSilently();
    setAuth0Token(token || "");
  };

  const fetchCompanyData = async (userAuth0Id: string) => {
    try {
      const response = await fetch(`${urlBase}/Company/user/${userAuth0Id}`);
      if (!response.ok) {
        throw new Error("Error obteniendo las company");
      }
      const data = await response.json();
      if (data?.data && data?.state) {
        setCompanyData(data?.data);
        return;
      }
      throw new Error("Error obteniendo las company");
    } catch (error) {
      showSnackBar({
        message: messages.errorGettingCompanyData,
      });
    }
  };

  useEffect(() => {
    getToken();
    if (isAuthenticated && !isLoading && user?.sub) {
      fetchCompanyData(user?.sub?.split("|")[1] || "");
    } else {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, user]);
  if (isLoading) {
    return <Splash />;
  }

  return isAuthenticated && !isLoading ? children : <Navigate to="/" />;
};

export default PrivateRoute;
