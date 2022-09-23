import React, { useState } from "react";
import { useTheme } from "styled-components";
import Box from "../../../components/Box/Box";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Text from "../../../components/Text/Text";
import { Container } from "../../Login/Login.style";
import { CadastroAlunosProps } from "./Cadastro.types";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Controller, useForm } from "react-hook-form";
import { useFetch } from "../../../utils/useFetch/useFetch";
import { CircularProgress } from "@mui/material";

const CadastroAluno = (props: CadastroAlunosProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
  });
  const [createUser, setCreateUser] = useState(false);
  const theme = useTheme();

  const handleSuccesCreate = () => {
    setCreateUser(true);
    setTimeout(() => {
      setCreateUser(false);
    }, 2000);
  };

  const {
    data,
    isLoading,
    doFetch: createAluno,
  } = useFetch("/criar-aluno", "post", {
    onSuccess: () => {
      handleSuccesCreate();
      reset({
        username: "",
        password: "",
      });
    },
  });

  const onSubmit = (data: any) => {
    createAluno();
    const credentialsAluno = {
      ...data,
      isAluno: true,
    };
    if (localStorage.getItem("alunos") !== null) {
      const alunos = localStorage.getItem("alunos") || "";
      localStorage.setItem(
        "alunos",
        JSON.stringify([...JSON.parse(alunos), credentialsAluno])
      );
    }

    if (localStorage.getItem("alunos") === null) {
      localStorage.setItem("alunos", JSON.stringify([credentialsAluno]));
    }
  };

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
        <Controller
          name="username"
          control={control}
          rules={{ required: "Campo obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <Input
              onChange={onChange}
              value={value}
              label="Usuário do aluno"
              width={350}
              height={40}
              fontSize={16}
              error={errors?.username?.message}
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
              value={value}
              label="Senha do aluno"
              width={350}
              height={40}
              fontSize={16}
              type="password"
              error={errors?.password?.message}
            />
          )}
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
          mt={40}
          text="Criar"
          width={350}
          height={60}
          borderRadius={8}
          fontWeight="bold"
          fontSize={18}
          color={theme.colors.signUp.singUpText}
          teacherBtn
          loading={
            isLoading && <CircularProgress size="18px" color="inherit" />
          }
        />
      </Box>

      {createUser && (
        <Stack sx={{ width: "100%" }} mt={3}>
          <Alert severity="success">{data.message}</Alert>
        </Stack>
      )}
    </Container>
  );
};

export default CadastroAluno;
