import { act, render } from "@testing-library/react";
import { ThemeConsumer, ThemeProvider } from "styled-components";
import { createMemoryHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { AxiosStatic } from "axios";

import { theme } from "../styles/theme";
import {
  UserContext,
  UserProvider,
  useUserContext,
} from "../context/UserContext";
import { useEffect } from "react";

export const MOCK_USER: any = {
  username: "fulano",
  password: "fulano",
};

export const renderWithTheme = (children: React.ReactNode) => {
  (ThemeConsumer as any)._currentValue = theme;
  return render(<>{children}</>);
};

export const ensureRender = async () => {
  await act(() => Promise.resolve());
};

export const renderWithRoute = (
  ui: React.ReactElement,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }: any) {
    const {
      isLoged,
      setIsLoged,
      user,
      setUser,
      isAntiTheme,
      setIsAntiTheme,
      isStartedProva,
      setIsStartedProva,
    } = useUserContext();

    const value = {
      isLoged,
      setIsLoged,
      user: "fulano",
      setUser,
      isAntiTheme,
      setIsAntiTheme,
      isStartedProva,
      setIsStartedProva,
    };

    return (
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={value}>
          <HistoryRouter history={history}>{children}</HistoryRouter>;
        </UserContext.Provider>
      </ThemeProvider>
    );
  }
  return {
    // @ts-ignore
    ...render(ui, { wrapper: Wrapper }),
    history,
  };
};

export const mockAxios: jest.Mocked<AxiosStatic> = require("axios").default;
