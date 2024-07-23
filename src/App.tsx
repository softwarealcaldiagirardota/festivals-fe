import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./private-routes";
import Login from "./pages/login";
import ClientVotes from "./pages/client-votes";
import CompanyReports from "./pages/company-reports";
import Dashboard from "./pages/dashboard";
import JudgeVotes from "./pages/judge-votes";
import ProviderReports from "./pages/provider-reports";
import Container from "./components/Container";
import Splash from "./components/Splash";
import { useEffect, useState } from "react";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSplash(false);
    }, 5000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {showSplash && <Splash />}
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/client-votes" element={<ClientVotes />} />
          <Route
            path="/company-reports"
            element={
              <PrivateRoute>
                <CompanyReports />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/judge-votes"
            element={
              <PrivateRoute>
                <JudgeVotes />
              </PrivateRoute>
            }
          />
          <Route
            path="/provider-reports"
            element={
              <PrivateRoute>
                <ProviderReports />
              </PrivateRoute>
            }
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
