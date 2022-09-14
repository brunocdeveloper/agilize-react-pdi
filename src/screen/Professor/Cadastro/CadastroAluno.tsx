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

const CadastroAluno = (props: CadastroAlunosProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [createUser, setCreateUser] = useState(false);
  const theme = useTheme();

  const handleSuccesCreate = () => {
    setCreateUser(true);
    setTimeout(() => {
      setCreateUser(false);
    }, 2000);
  };

  const onSubmit = (data: any) => {
    console.log("testes");
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

    handleSuccesCreate();
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
            type="submit"
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
      </form>

      {createUser && (
        <Stack sx={{ width: "100%" }} mt={3}>
          <Alert severity="success">Usuário criado com sucesso</Alert>
        </Stack>
      )}
    </Container>
  );
};

export default CadastroAluno;
