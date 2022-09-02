import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { doFetching } from "./components/hookFetch.js";
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { theme } from "./styles/theme.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./screen/Login.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
