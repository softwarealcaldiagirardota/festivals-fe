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
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
