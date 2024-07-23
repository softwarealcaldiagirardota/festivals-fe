import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface HeaderContextType {
  title: string;
  setTitle: (title: string) => void;
  openDrawerMenu: boolean;
  setOpenDrawerMenu: (openDrawerMenu: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [title, setTitle] = useState<string>("");
  const [openDrawerMenu, setOpenDrawerMenu] = useState<boolean>(false);

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
