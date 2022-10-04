export interface UserProviderProps {
  children: React.ReactElement | React.ReactNode;
}

export interface UserContexType {
  isLoged: boolean;
  setIsLoged: (isLoged: boolean) => void;
  user: string;
  setUser: (user: string) => void;
  isAntiTheme: boolean;
  setIsAntiTheme: (isTheme: boolean) => void;
  isStartedProva: boolean;
  setIsStartedProva: (isStarted: boolean) => void;
}
