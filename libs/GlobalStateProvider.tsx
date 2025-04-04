"use client"
import { createContext, useState, ReactNode } from "react";

type GlobalStateContextType = {
  isAdmin: boolean; // تعریف نوع state
  setIsAdmin: React.Dispatch<React.SetStateAction<boolean>>; // تعریف نوع تابع تغییر دهنده state
};

export const GlobalStateContext = createContext<
  GlobalStateContextType | undefined
>(undefined);

type GlobalStateProviderProps = {
  children: ReactNode; 
};

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false); 

  return (
    <GlobalStateContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
