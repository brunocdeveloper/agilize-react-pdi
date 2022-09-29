import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Container } from "./Login.style";
import CircularProgress from "@mui/material/CircularProgress";
import { useFetch } from "../../utils/useFetch/useFetch";
import { Controller, useForm } from "react-hook-form";
import { useUserContext } from "../../context/UserContext";
import { Alert, Stack } from "@mui/material";

const Login = () => {
  const theme = useTheme();
  const { setIsLoged, setUser } = useUserContext();
  const {
    handleSubmit,
    control,
    clearErrors,
    getValues,
    watch,
    formState: { errors },
  } = useForm();
  const [isProfessor, setIsProfessor] = useState(true);
  const username = watch("username");
  const password = watch("password");
  const [errorLogin, setErrorLogin] = useState(false);

  const handleErrorLogin = () => {
    setErrorLogin(true);
    setTimeout(() => {
      setErrorLogin(false);
    }, 2000);
  };

  const { isLoading, doFetch: login } = useFetch("/login", "get", {
    onSuccess: (data) => {
      const alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
      const findedAluno = alunos?.find(
        (aluno: any) => aluno.username === username
      );
      if (
        isProfessor &&
        data.user === getValues("username") &&
        data.password === getValues("password")
      ) {
        setIsLoged(true);
        navigate("/adm");
        return;
      }
      if (!isProfessor && password === findedAluno.password) {
        setIsLoged(true);
        setUser(findedAluno.username);
        navigate("/aluno");
        return;
      }

      return handleErrorLogin();
    },
  });

  const navigate = useNavigate();

  const toggleProfessorAluno = () => {
    setIsProfessor(!isProfessor);
    clearErrors();
  };

  const onSubmit = async () => {
    await login();
  };

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
          disabled={isLoading}
          fontSize={18}
          color={theme.colors.signUp.singUpText}
          teacherBtn
        />
      </Box>
      <Box mt={20}>
        <Controller
          name="username"
          control={control}
          rules={{ required: "Campo obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              label={
                (isProfessor && "Usuário do professor") || "Usuário do aluno"
              }
              error={errors?.username?.message}
              width={350}
              height={40}
              fontSize={16}
              value={value}
            />
          )}
        />
      </Box>
      <Box mt={30}>
        <Controller
          name="password"
          control={control}
          rules={{ required: "Campo obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              label={(isProfessor && "Senha do professor") || "Senha do aluno"}
              error={errors?.password?.message}
              width={350}
              height={40}
              fontSize={16}
              type="password"
              value={value}
            />
          )}
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          onClick={handleSubmit(onSubmit)}
          mt={40}
          text="Entrar"
          width={350}
          height={60}
          borderRadius={8}
          fontWeight="bold"
          fontSize={18}
          color={theme.colors.signUp.singUpText}
          teacherBtn
          disabled={isLoading}
          loading={
            isLoading && <CircularProgress size="18px" color="inherit" />
          }
        />
      </Box>

      {errorLogin && (
        <Box width={600} ml={50} mt={10}>
          <Stack sx={{ width: "40%" }}>
            <Alert severity="error">Credenciais inválida</Alert>
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default Login;
