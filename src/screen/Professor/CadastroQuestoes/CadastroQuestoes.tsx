import React from "react";
import { useTheme } from "styled-components";
import Box from "../../../components/Box/Box";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { Label } from "../../../components/Input/Input.styles";
import Text from "../../../components/Text/Text";
import { Container } from "../../Login/Login.style";
import { TextArea } from "./CadastroQuestoes.style";

const CadastroQuestoes: React.FC = () => {
  const theme = useTheme();

  return (
    <Box display="flex" mt={50} mb={40}>
      <Container width={700} height={730}>
        <Box display="flex" justifyContent="flex-start" mt={20}>
          <Text
            text="Cadastre questões"
            color={theme.colors.signUp.singUpText}
            fontSize={20}
            fontWeight="bold"
          />
        </Box>
        <Box mt={20}>
          <Label>Digite aqui a questão</Label>
          <TextArea />
        </Box>
        <Box mt={20}>
          <Input
            onChange={({ target }) => {}}
            label="Digite aqui o tema da questão"
            width="100%"
            height={40}
            fontSize={16}
          />
        </Box>
        <Box mt={20}>
          <Input
            onChange={({ target }) => {}}
            label="Digite aqui a alternativa correta"
            width="100%"
            height={40}
            fontSize={16}
            correctlyQuestion
          />
        </Box>
        <Box mt={20}>
          <Input
            onChange={({ target }) => {}}
            label="Digite abaixo qual serão as alternativas falsas"
            width="100%"
            height={40}
            fontSize={16}
            incorrectlyQuestion
          />
        </Box>
        <Box mt={20}>
          <Input
            onChange={({ target }) => {}}
            width="100%"
            height={40}
            fontSize={16}
            incorrectlyQuestion
          />
        </Box>
        <Box mt={20}>
          <Input
            onChange={({ target }) => {}}
            width="100%"
            height={40}
            fontSize={16}
            type="password"
            incorrectlyQuestion
          />
        </Box>
        <Box mt={20}>
          <Input
            onChange={({ target }) => {}}
            width="100%"
            height={40}
            fontSize={16}
            type="password"
            incorrectlyQuestion
          />
        </Box>
        <Box display="flex" justifyContent="center">
          <Button
            onClick={(e) => {}}
            mt={40}
            text="Criar"
            width={350}
            height={60}
            borderRadius={8}
            fontWeight="bold"
            fontSize={18}
            color={theme.colors.signUp.singUpText}
            teacherBtn
          />
        </Box>
      </Container>
      <Container height={730} width={450}></Container>
    </Box>
  );
};

export default CadastroQuestoes;
