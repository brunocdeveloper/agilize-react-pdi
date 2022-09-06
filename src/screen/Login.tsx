import React from "react";
import Box from "../components/Box/Box";
import Input from "../components/Input/Input";
import { Container } from "./Login.style";

const Login = () => {
  return (
    <Container>
      <Box></Box>
      <Box backgroundColor="green">
        <Input label="Usuário" />
      </Box>
    </Container>
  );
};

export default Login;
