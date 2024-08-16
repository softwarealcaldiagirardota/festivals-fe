import { AddBusiness, HowToVote, Poll } from "@mui/icons-material";
import { palette } from "../theme";
import { Participation } from "./type";

const colorIcon = palette.neutral.B;
const fontSize = "18px";
export const menuItems = [
  {
    label: "Dashboard",
    url: "/dashboard",
    icon: <Poll sx={{ color: colorIcon, fontSize: fontSize }} />,
  },
  {
    label: "Participante",
    url: "/company-reports",
    icon: <AddBusiness sx={{ color: colorIcon, fontSize: fontSize }} />,
  },
  // {
  //   label: "Jurado",
  //   url: "/judge-votes",
  //   icon: <Gavel sx={{ color: colorIcon, fontSize: fontSize }} />,
  // },
  // {
  //   label: "Proveedor",
  //   url: "/provider-reports",
  //   icon: <Receipt sx={{ color: colorIcon, fontSize: fontSize }} />,
  // },
  {
    label: "Calificar",
    url: "/client-votes",
    icon: <HowToVote sx={{ color: colorIcon, fontSize: fontSize }} />,
  },
];

export const messages = {
  internetError:
    "Conexión a Internet no disponible. Por favor, inténtalo de nuevo más tarde.",
  genericError: "Se produjo un error. Por favor, inténtalo de nuevo.",
  errorGettingCompanyName:
    "Se produjo un error obteniendo el nombre del comercio. Por favor, inténtalo de nuevo.",
  errorGettingQuestions:
    "Se produjo un error obteniendo las preguntas. Por favor, inténtalo de nuevo.",
  errorGettingCompanyData:
    "Error obteniendo los datos del participante. Por favor refresque e intente de nuevo",
  errorSavingSales: "Error guardando la venta. Por favor intente de nuevo",
  saveSuccess: "Registro guardado correctamente.",
  errorSavingBuys: "Error guardando la compra. Por favor intente de nuevo",
};

export const validateCodeStructure = (code: string): boolean => {
  const regex = /^[A-Za-z0-9]{4}-[A-Za-z0-9]{5}$/;
  return regex.test(code);
};

export const getCodeUser = (code: string | null): string => {
  if (!code) return "";
  return code?.split("-")[1];
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatDateTime = (date: Date) => {
  const dateFormatter = new Intl.DateTimeFormat("es-CO", {
    weekday: "long",
    day: "numeric",
  });
  const dateParts = dateFormatter.formatToParts(date);
  //@ts-ignore
  const dayOfWeek = dateParts.find((part) => part.type === "weekday").value;
  //@ts-ignore
  const dayOfMonth = dateParts.find((part) => part.type === "day").value;

  const timeFormatter = new Intl.DateTimeFormat("es-CO", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const timeParts = timeFormatter.formatToParts(date);
  const formattedTime = timeParts
    .map((part) => {
      switch (part.type) {
        case "hour":
        case "minute":
        case "dayPeriod":
          return part.value;
        case "literal":
          return part.value === ":" ? ":" : " ";
        default:
          return "";
      }
    })
    .join("");

  return `${capitalizeFirstLetter(dayOfWeek)} ${dayOfMonth}, ${formattedTime}`;
};

export const formatter = new Intl.NumberFormat("es-CO", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const UNIDADES = " ud.";
export const KG = " kg.";

export const voteAgain = () => {
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const domain = `${url.protocol}//${url.host}`;
  const cleanUrl = `${domain}/client-votes`;
  window.history.replaceState({}, document.title, cleanUrl);
  window.location.replace(cleanUrl);
};

export const pathnamePermission = [
  "/dashboard",
  "/company-reports",
  "/company-reports/sales",
  "/company-reports/buys",
  "/company-reports/sales/detail",
  "/company-reports/buys/detail",
  "/judge-votes",
  "/login",
];

export const domain = "dev-t7qrzenx1neaggbp.us.auth0.com"; //import.meta.env.VITE_AUTH0_DOMAIN;
export const clientId = "NxzOyJPPDsH8EklQOCJot9IcGpD7Gnso"; //import.meta.env.VITE_AUTH0_CLIENT_ID;
export const audience = "https://ferias.girardotabackoffice.com";

export const dominioBase = "https://api.feriasgirardota.com";
export const urlBase = "https://api.feriasgirardota.com/api";

export const convertDate = (dateString: string) => {
  const date = new Date(dateString);
  const userTimezoneDate = date.toLocaleString();
  return `${formatDateTime(new Date(userTimezoneDate?.split(".")[0]))}`;
};

export const sumCant = (array: Participation[]) => {
  return array.reduce((total, item) => total + item.cant, 0);
};

export const sumCantDay = (array: Participation[]) => {
  const today = new Date().toISOString().split("T")[0];
  return array
    .filter((item) => item.createdAt.split("T")[0] === today)
    .reduce((total, item) => total + item.cant, 0);
};

export const orderArrayDesc = (array: Participation[]) =>
  array.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

export const totalSales2023 = 42949;
export const totalSales2023Money = 515388000;
export const currentPrice = 15000;

export const colorsDashboard = [
  "#501712",
  "#F9EAD3",
  "#BF1F1F",
  "#FFA901",
  "#0487D9",
  "#3B3A30",
  "#607D8B",
  "#8C5340",
  "#3F3F44",
  "#4A4847",
  "#2A4B7C",
  "#A5A58D",
  "#455A64",
];
