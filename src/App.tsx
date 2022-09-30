import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles.js";
import { antiTheme, theme } from "./styles/theme.js";
import { UserProvider, useUserContext } from "./context/UserContext.js";
import MainRoutes from "./routes/MainRoutes.js";
import Box from "./components/Box/Box.js";
import { StyledText } from "./screen/Aluno/Aluno.style.js";
import SunIcon from "./assets/SunIcon";
import MoonIcon from "./assets/MoonIcon";

function App() {
  const {
    isLoged,
    setIsLoged,
    isAntiTheme,
    setIsAntiTheme,
    setIsStartedProva,
  } = useUserContext();

  return (
    <ThemeProvider theme={isAntiTheme ? antiTheme : theme}>
      <Box padding={20} height={60} display="flex" justifyContent="flex-end">
        <Box
          mr={25}
          onClick={() => setIsAntiTheme(!isAntiTheme)}
          opacityOnHover
        >
          {isAntiTheme ? <SunIcon /> : <MoonIcon />}
        </Box>
        {isLoged && (
          <StyledText
            mt="3px"
            onClick={() => {
              setIsLoged(false);
              setIsStartedProva(true);
            }}
            text="Sair"
            fontSize={20}
            fontWeight="bold"
            color={theme.colors.white}
          />
        )}
      </Box>
      <GlobalStyle />
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
