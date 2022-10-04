import { createContext, useContext, useEffect, useState } from "react";
import { UserContexType, UserProviderProps } from "./UserContext.types";

export const UserContext = createContext({} as UserContexType);
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [isLoged, setIsLoged] = useState(false);
  const [isAntiTheme, setIsAntiTheme] = useState(true);
  const [isStartedProva, setIsStartedProva] = useState(true);
  const [user, setUser] = useState("");

  useEffect(() => {
    setIsStartedProva(true);
  }, []);

  const value = {
    isLoged,
    setIsLoged,
    user,
    setUser,
    isAntiTheme,
    setIsAntiTheme,
    isStartedProva,
    setIsStartedProva,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
