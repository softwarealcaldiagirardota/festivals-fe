import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/index.tsx";
import { HeaderProvider } from "./context/header-context.tsx";
import PersistentDrawerLeft from "./components/Drawer/index.tsx";
import Footer from "./components/FooterMenu/index.tsx";

const domain = "dev-t7qrzenx1neaggbp.us.auth0.com"; //import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = "NxzOyJPPDsH8EklQOCJot9IcGpD7Gnso"; //import.meta.env.VITE_AUTH0_CLIENT_ID;
const audience = "https://ferias.girardotabackoffice.com";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <HeaderProvider>
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          authorizationParams={{
            redirect_uri: window.location.origin,
            audience: audience,
          }}
        >
          <BrowserRouter>
            <PersistentDrawerLeft />
            <Header />
            <App />
            <Footer />
          </BrowserRouter>
          <div style={{ height: "200px", width: "100%" }}></div>
        </Auth0Provider>
      </HeaderProvider>
    </React.StrictMode>
  </ThemeProvider>
);
