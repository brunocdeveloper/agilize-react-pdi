import React from "react";
import { useTheme } from "styled-components";
import Box from "../components/Box/Box";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { Container } from "./Login.style";

const Login = () => {
  const theme = useTheme();
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
      <Box mt={10}>
        <Input label="Usuário" width={350} height={40} fontSize={16} />
      </Box>
    </Container>
  );
};

export default Login;
