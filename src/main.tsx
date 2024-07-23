import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from "@mui/material";
import TextNumber from "./components/TextNumber/index.tsx";
import Button from "./components/Button/index.tsx";
import { theme } from "./theme.ts";
import Title from "./components/Title/index.tsx";
import Description from "./components/Description/index.tsx";
import Number from "./components/Number/index.tsx";

const domain = "dev-t7qrzenx1neaggbp.us.auth0.com"; //import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = "NxzOyJPPDsH8EklQOCJot9IcGpD7Gnso"; //import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <TextNumber value="€ / kg" />
        <Number value="1.41" />
        <Button text="Botón fondo entero" />
        <Button variant="outlined" text="Botón sin fondo" />
        <Title text="Título grande" />
        <Title text="Título pequeño" isSubtitle />
        <Description text="Descripción grande" />
        <Description isSmall text="Descripción pequeño" />
      </Auth0Provider>
      ,
    </React.StrictMode>
  </ThemeProvider>
);
