import { useMediaQuery } from "@mui/material";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { theme } from "../theme";

interface HeaderContextType {
  title: string;
  setTitle: (title: string) => void;
  openDrawerMenu: boolean;
  setOpenDrawerMenu: (openDrawerMenu: boolean) => void;
  isMobile?: boolean;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState<string>("");
  const [openDrawerMenu, setOpenDrawerMenu] = useState<boolean>(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setOpenDrawerMenu(false);
  }, [title]);

  return (
    <HeaderContext.Provider
      value={{
        title,
        setTitle,
        openDrawerMenu,
        setOpenDrawerMenu,
        isMobile,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = (): HeaderContextType => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
};
