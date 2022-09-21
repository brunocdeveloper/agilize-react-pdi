import { useTheme } from "styled-components";
import Box from "../../components/Box/Box";
import Text from "../../components/Text/Text";
import { Container } from "../Login/Login.style";

const Aluno = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        height={20}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        padding={25}
        mb={20}
      >
        <Text
          text="Sair"
          color={theme.colors.white}
          fontWeight="bold"
          fontSize={2}
        />
      </Box>
      <Container width={750}></Container>
    </Box>
  );
};

export default Aluno;
