import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import Box from "../../../components/Box/Box";
import Button from "../../../components/Button/Button";
import Text from "../../../components/Text/Text";
import { useFetch } from "../../../utils/useFetch/useFetch";
import { Container } from "../../Login/Login.style";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { StyledContainer, StyledText } from "./AplicarProvas.style";
import { AlunoTypes } from "../../Login/Login.types";
import { ProvaAtribuidaTypes, ProvaType } from "../../Aluno/Aluno.types";

const AplicarProvas = () => {
  const [alunos, setAlunos] = useState<AlunoTypes[]>([]);
  const [provas, setProvas] = useState<ProvaType[]>([]);
  const [isProvaAtribuida, setIsProvaAtribuida] = useState(false);
  const [testesAtribuidos, setTestesAtribuidos] = useState<any>([]);
  const theme = useTheme();
  const selectedAluno = alunos.find(
    (aluno: AlunoTypes) => aluno?.selected
  )?.username;
  const selectedProvas = provas.find((prova: ProvaType) => prova?.selected);

  const isSelectedProvaAndAluno = selectedAluno && selectedProvas;

  const handleSuccesCreate = () => {
    setIsProvaAtribuida(true);
    setTimeout(() => {
      setIsProvaAtribuida(false);
    }, 2000);
  };

  useEffect(() => {
    const alunos = localStorage.getItem("alunos") || "[]";
    const provas = localStorage.getItem("provas") || "[]";
    const provasJaAtribuidas = localStorage.getItem("provasAtribuidas") || "[]";

    setAlunos(JSON.parse(alunos));
    setProvas(JSON.parse(provas));
    setTestesAtribuidos(JSON.parse(provasJaAtribuidas));
  }, []);

  const { data, isLoading, doFetch } = useFetch("/atribuir-prova", "post", {
    onSuccess: () => {
      handleSuccesCreate();
      const selectedAluno = alunos.find(
        (aluno: AlunoTypes) => aluno?.selected
      )?.username;
      const selectedProvas = provas.find((prova: ProvaType) => prova?.selected);

      const provasAtribuidas = JSON.parse(
        localStorage.getItem("provasAtribuidas") || "[]"
      );

      if (provasAtribuidas.length === 0) {
        localStorage.setItem(
          "provasAtribuidas",
          JSON.stringify([
            { username: selectedAluno, provas: [selectedProvas] },
          ])
        );
        setTestesAtribuidos([
          { username: selectedAluno, provas: [selectedProvas] },
        ]);
        return;
      }

      const hasAlunoAtribuido = provasAtribuidas.find(
        (estudante: AlunoTypes) => estudante.username === selectedAluno
      );

      const hasProvaAtribuida = hasAlunoAtribuido?.provas.some(
        (prova: ProvaType) => prova.nomeProva === selectedProvas?.nomeProva
      );

      if (hasProvaAtribuida) {
        return;
      }

      if (hasAlunoAtribuido) {
        const indexProvaAtribuida = provasAtribuidas.indexOf(hasAlunoAtribuido);
        provasAtribuidas[indexProvaAtribuida].provas.push(selectedProvas);
        localStorage.setItem(
          "provasAtribuidas",
          JSON.stringify(provasAtribuidas)
        );
        setTestesAtribuidos(provasAtribuidas);
      }

      if (!hasAlunoAtribuido) {
        localStorage.setItem(
          "provasAtribuidas",
          JSON.stringify([
            ...provasAtribuidas,
            { username: selectedAluno, provas: [selectedProvas] },
          ])
        );
        setTestesAtribuidos([
          ...provasAtribuidas,
          { username: selectedAluno, provas: [selectedProvas] },
        ]);
      }
    },
  });

  const handleSelectUser = (aluno: AlunoTypes) => {
    setAlunos(
      alunos.map((estudante: AlunoTypes) => ({
        ...estudante,
        selected: false,
        ...(aluno.username === estudante.username && {
          selected: true,
        }),
      }))
    );
  };

  const handleSelectProva = (teste: any) => {
    setProvas(
      provas.map((prova) => ({
        ...prova,
        selected: false,
        ...(prova.nomeProva === teste.nomeProva && {
          selected: true,
        }),
      }))
    );
  };

  const createProva = () => {
    doFetch();
  };

  return (
    <Box marginX="auto" maxWidth={1100}>
      <StyledContainer mt={50} display="flex">
        <Container height={500} width={300}>
          <Box display="flex" justifyContent="flex-start" mt={20}>
            <Text
              text="Selecione um aluno"
              color={theme.colors.signUp.singUpText}
              fontSize={20}
              fontWeight="bold"
            />
          </Box>
          <Box mt={24} scrollY height={400}>
            {alunos?.map((aluno: AlunoTypes) => (
              <Box mt={3}>
                <StyledText
                  onClick={() => handleSelectUser(aluno)}
                  text={aluno?.username}
                  color={
                    aluno.selected === true
                      ? theme.colors.signUp.singUpButton
                      : theme.colors.signUp.singUpText
                  }
                  fontSize={18}
                />
              </Box>
            ))}
          </Box>
        </Container>
        <Container height={500} width={300}>
          <Box display="flex" justifyContent="flex-start" mt={20}>
            <Text
              text="Selecione a prova a ser aplicada"
              color={theme.colors.signUp.singUpText}
              fontSize={20}
              fontWeight="bold"
            />
          </Box>
          <Box mt={24} scrollY height={400}>
            {provas?.map((prova: ProvaType) => (
              <Box mt={3}>
                <StyledText
                  onClick={() => handleSelectProva(prova)}
                  text={prova?.nomeProva}
                  color={
                    prova.selected === true
                      ? theme.colors.signUp.singUpButton
                      : theme.colors.signUp.singUpText
                  }
                  fontSize={18}
                />
              </Box>
            ))}
          </Box>
        </Container>
        <Container height={500} width={300}>
          <Box display="flex" justifyContent="flex-start" mt={20}>
            <Text
              text="Provas atribuidas"
              color={theme.colors.signUp.singUpText}
              fontSize={20}
              fontWeight="bold"
            />
          </Box>
          <Box mt={24} scrollY height={400}>
            {testesAtribuidos?.map((prova: ProvaAtribuidaTypes) => (
              <Box mt={4}>
                <Text
                  fontWeight={700}
                  onClick={() => handleSelectProva(prova)}
                  text={prova?.username}
                  color={theme.colors.signUp.singUpText}
                  fontSize={18}
                />
                {prova?.provas.map((licao: ProvaType) => (
                  <Text
                    ml={15}
                    mt={2}
                    text={licao?.nomeProva}
                    color={theme.colors.signUp.singUpText}
                  />
                ))}
              </Box>
            ))}
          </Box>
        </Container>
      </StyledContainer>
      {isProvaAtribuida && (
        <Box
          display="flex"
          justifyContent="center"
          position="absolute"
          width={800}
          marginX={150}
        >
          <Stack sx={{ width: "40%" }} mt="-15px">
            <Alert severity="success">{data?.message}</Alert>
          </Stack>
        </Box>
      )}
      <Box display="flex" justifyContent="center" mt={50}>
        <Button
          onClick={createProva}
          backgroundColor={theme.colors.signUp.container}
          text="Atribuir prova"
          width={350}
          height={60}
          borderRadius={8}
          fontWeight="bold"
          fontSize={18}
          color={theme.colors.signUp.singUpText}
          teacherBtn
          disabled={isLoading || !isSelectedProvaAndAluno}
          loading={
            isLoading && <CircularProgress size="18px" color="inherit" />
          }
        />
      </Box>
    </Box>
  );
};

export default AplicarProvas;
