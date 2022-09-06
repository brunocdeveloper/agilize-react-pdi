import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import { Container } from "./Login.style";

const Login = () => {
  const theme = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    console.log(username, password);
    navigate("/adm");
  }, [username, password]);

  return (
    <Container>
      <Box display="flex" justifyContent="flex-end">
        <Button
          mt={40}
          text="Sou professor"
          width={155}
          height={40}
          borderRadius={8}
          fontWeight="bold"
          fontSize={18}
          color={theme.colors.signUp.singUpText}
          teacherBtn
        />
      </Box>
      <Box mt={20}>
        <Input
          onChange={({ target }) => setUsername(target.value)}
          label="Usuário"
          width={350}
          height={40}
          fontSize={16}
        />
      </Box>
      <Box mt={30}>
        <Input
          onChange={({ target }) => setPassword(target.value)}
          label="Senha"
          width={350}
          height={40}
          fontSize={16}
          type="password"
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          onClick={handleSubmit}
          mt={40}
          text="Entrar"
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

export default Login;
