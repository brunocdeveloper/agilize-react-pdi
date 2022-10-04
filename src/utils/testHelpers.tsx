import { ThemeProvider, useTheme } from "styled-components";
import { render, screen } from "@testing-library/react";
import { theme } from "../styles/theme";
import { act } from "react-dom/test-utils";

export const renderWithTheme = (children: React.ReactNode) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

export const ensureRender = async () => {
  await act(() => Promise.resolve());
};
