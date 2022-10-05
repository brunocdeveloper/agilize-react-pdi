import { act, render } from "@testing-library/react";
import { ThemeConsumer, ThemeProvider } from "styled-components";
import { createMemoryHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { AxiosStatic } from "axios";

import { theme } from "../styles/theme";

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
    return (
      <ThemeProvider theme={theme}>
        <HistoryRouter history={history}>{children}</HistoryRouter>;
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
