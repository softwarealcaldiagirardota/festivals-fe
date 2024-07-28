import {
  AddBusiness,
  Gavel,
  HowToVote,
  Poll,
  Receipt,
} from "@mui/icons-material";
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
  {
    label: "Jurado",
    url: "/judge-votes",
    icon: <Gavel sx={{ color: colorIcon, fontSize: fontSize }} />,
  },
  {
    label: "Proveedor",
    url: "/provider-reports",
    icon: <Receipt sx={{ color: colorIcon, fontSize: fontSize }} />,
  },
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
};

export const formatDateTime = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("es-ES", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const parts = formatter.formatToParts(date);
  const formattedDate = parts
    .filter((part) => part.type !== "literal")
    .map((part) => part.value)
    .join(" ");

  return formattedDate.replace(",", "") + " " + formatAMPM(date);
};

export const formatAMPM = (date: Date) => {
  let hours = date.getHours();
  let minutes: number | string = date.getMinutes();
  const ampm = hours >= 12 ? "p.m." : "a.m.";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutes} ${ampm}`;
};

export const formatter = new Intl.NumberFormat("es-CO", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
