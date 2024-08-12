import { AddBusiness, HowToVote, Poll } from "@mui/icons-material";
import { palette } from "../theme";

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
  "/",
];
