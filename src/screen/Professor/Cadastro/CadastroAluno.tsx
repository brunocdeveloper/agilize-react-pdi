import React from "react";
import { useTheme } from "styled-components";
import Box from "../../../components/Box/Box";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Text from "../../../components/Text/Text";
import { Container } from "../../Login/Login.style";
import { CadastroAlunosProps } from "./Cadastro.types";

const CadastroAluno = (props: CadastroAlunosProps) => {
  const { setUsername, setPassword, password, username, saveAutentication } =
    props;
  const theme = useTheme();
  return (
    <Container mt={100}>
      <Box display="flex" justifyContent="flex-start" mt={40}>
        <Text
          text="Cadastre o aluno"
          color={theme.colors.signUp.singUpText}
          fontSize={20}
          fontWeight="bold"
        />
      </Box>
      <Box mt={30}>
        <Input
          onChange={({ target }) => setUsername(target.value)}
          label="Usuário do aluno"
          width={350}
          height={40}
          fontSize={16}
          value={username}
        />
      </Box>
      <Box mt={30}>
        <Input
          onChange={({ target }) => setPassword(target.value)}
          label="Senha do aluno"
          width={350}
          height={40}
          fontSize={16}
          type="password"
          value={password}
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          onClick={(e) => saveAutentication(e)}
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
  );
};

export default CadastroAluno;
