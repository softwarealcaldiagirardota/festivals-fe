import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { Button, ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import ButtonMaterial from "./components/Button/index.tsx";
import ButtonMaterial1 from "./components/Button1/index.tsx";
import Texto from "./components/Textos/index.tsx";
import Titulo from "./components/Titulo/index.tsx";
import Categorias from "./components/Categorias/index.tsx";
import Productos from "./components/Productos/index.tsx";
import Precio from "./components/Precio/index.tsx";
import Moneda from "./components/Moneda/index.tsx";


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
        <Moneda/>
        <Precio/>
        <Productos/>
        <Categorias/>
        
        <Titulo/>
        <Texto/>
        <ButtonMaterial />
        <ButtonMaterial1/>

       
        
      </Auth0Provider>
      ,
    </React.StrictMode>
  </ThemeProvider>
);
