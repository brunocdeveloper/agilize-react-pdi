import axios from "axios";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { instanceAxios } from "../../utils/Axios/axios";
import { Container, StyledLoader } from "./Login.style";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Login = () => {
  const theme = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isProfessor, setIsProfessor] = useState(true);
  const [loadingFetch, setLoadingFetch] = useState(false);
  const [statusFetching, setStatusFetching] = useState(200);
  const navigate = useNavigate();

  const toggleProfessorAluno = () => {
    setIsProfessor(!isProfessor);
    setUsername("");
    setPassword("");
  };

  const handleSubmit = useCallback(async () => {
    setLoadingFetch(true);
    const {
      status,
      data: { data },
    } = await instanceAxios.get("/login");
    setLoadingFetch(false);
    setStatusFetching(status);
    if (isProfessor && data.user === username && data.password === password) {
      navigate("/adm");
    }
  }, [username, password]);

  return (
    <Container mt={180}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          mt={40}
          text={(isProfessor && "Sou aluno") || "Sou professor"}
          onClick={toggleProfessorAluno}
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
          label={(isProfessor && "Usuário do professor") || "Usuário do aluno"}
          width={350}
          height={40}
          fontSize={16}
          value={username}
        />
      </Box>
      <Box mt={30}>
        <Input
          onChange={({ target }) => setPassword(target.value)}
          label={(isProfessor && "Senha do professor") || "Senha do aluno"}
          width={350}
          height={40}
          fontSize={16}
          type="password"
          value={password}
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
          loading={
            loadingFetch && <CircularProgress size="18px" color="inherit" />
          }
        />
      </Box>
    </Container>
  );
};

export default Login;
