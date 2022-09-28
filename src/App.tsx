import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { antiTheme, theme } from "./styles/theme.js";
import { UserProvider } from "./context/UserContext.js";
import MainRoutes from "./routes/MainRoutes.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <GlobalStyle />
        <MainRoutes />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
