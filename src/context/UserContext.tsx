import { createContext, useContext, useState } from "react";

interface UserProviderProps {
  children: React.ReactElement | React.ReactNode;
}

export const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState("bruno");

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
