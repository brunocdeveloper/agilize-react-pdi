import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { antiTheme, theme } from "./styles/theme.js";
import { UserProvider } from "./context/UserContext.js";
import MainRoutes from "./routes/MainRoutes.js";
import Box from "./components/Box/Box.js";

function App() {
  return (
    <ThemeProvider theme={antiTheme}>
      <UserProvider>
        <Box
          position="absolute"
          top={0}
          right={70}
          padding={20}
          backgroundColor="green"
        >
          testando
        </Box>
        <GlobalStyle />
        <MainRoutes />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
