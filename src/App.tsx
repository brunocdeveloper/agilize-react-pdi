import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { antiTheme, theme } from "./styles/theme.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes.js";

function App() {
  return (
    <ThemeProvider theme={antiTheme}>
      <GlobalStyle />
      <PublicRoutes />
    </ThemeProvider>
  );
}

export default App;
