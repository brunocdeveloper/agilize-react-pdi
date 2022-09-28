import { createContext, useContext, useState } from "react";

interface UserProviderProps {
  children: React.ReactElement | React.ReactNode;
}

interface UserContexType {
  isLoged: boolean;
  setIsLoged: (t: boolean) => void;
  user: string;
  setUser: (t: string) => void;
}

export const UserContext = createContext({} as UserContexType);
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [isLoged, setIsLoged] = useState(false);
  const [user, setUser] = useState("");

  const value = {
    isLoged,
    setIsLoged,
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
