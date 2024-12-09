import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./private-routes";
import Login from "./pages/login";
import ClientVotes from "./pages/client-votes";
import CompanyReports from "./pages/company-reports";
import Dashboard from "./pages/dashboard";
import JudgeVotes from "./pages/judge-votes";
import ProviderReports from "./pages/provider-reports";
import Container from "./components/Container";
import { Alert, Snackbar } from "@mui/material";
import { useHeader } from "./context/header-context";
import Sales from "./pages/company-reports/sales";
import Buys from "./pages/company-reports/buys";
import ReportsSalesDetails from "./pages/company-reports/sales/details";
import ReportsBuysDetails from "./pages/company-reports/buys/details";
import HomeImage from "./pages/home";
import DishList from "./pages/home/dish-list";
import ScheduleList from "./pages/home/scheduled-list";
import NotFound from "./pages/404";
import Calm from "./pages/home/calm";
import { palette } from "./theme";
import Results from "./pages/results";

const App = () => {
  const { snackBarState, handleSnackBarClose, setAuth0Token } = useHeader();
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<HomeImage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calm" element={<Calm />} />
          <Route path="/client-votes" element={<ClientVotes />} />
          <Route path="/home" element={<HomeImage />} />
          <Route path="/home/dish-list" element={<DishList />} />
          <Route path="/home/scheduled-list" element={<ScheduleList />} />
          <Route
            path="/company-reports"
            element={
              <PrivateRoute setAuth0Token={setAuth0Token}>
                <CompanyReports />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute setAuth0Token={setAuth0Token}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/results"
            element={
              <PrivateRoute setAuth0Token={setAuth0Token}>
                <Results />
              </PrivateRoute>
            }
          />
          <Route
            path="/judge-votes"
            element={
              <PrivateRoute setAuth0Token={setAuth0Token}>
                <JudgeVotes />
              </PrivateRoute>
            }
          />
          <Route
            path="/provider-reports"
            element={
              <PrivateRoute setAuth0Token={setAuth0Token}>
                <ProviderReports />
              </PrivateRoute>
            }
          />
          <Route
            path="/company-reports/sales"
            element={
              <PrivateRoute setAuth0Token={setAuth0Token}>
                <Sales />
              </PrivateRoute>
            }
          />
          <Route
            path="/company-reports/buys"
            element={
              <PrivateRoute setAuth0Token={setAuth0Token}>
                <Buys />
              </PrivateRoute>
            }
          />
          <Route
            path="/company-reports/sales/detail"
            element={
              <PrivateRoute setAuth0Token={setAuth0Token}>
                <ReportsSalesDetails />
              </PrivateRoute>
            }
          />

          <Route
            path="/company-reports/buys/detail"
            element={
              <PrivateRoute setAuth0Token={setAuth0Token}>
                <ReportsBuysDetails />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackBarState?.open}
        autoHideDuration={5000}
        onClose={handleSnackBarClose}
      >
        <Alert
          onClose={handleSnackBarClose}
          severity={snackBarState?.severity}
          variant="filled"
          sx={
            snackBarState?.severity === "success"
              ? {
                  backgroundColor:
                    palette.primary.backgroundBlueFestivalChicharron,
                }
              : { backgroundColor: "#red" }
          }
        >
          {snackBarState?.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default App;
