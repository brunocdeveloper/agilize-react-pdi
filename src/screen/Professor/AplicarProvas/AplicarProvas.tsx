import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import Box from "../../../components/Box/Box";
import Button from "../../../components/Button/Button";
import Text from "../../../components/Text/Text";
import { Container } from "../../Login/Login.style";

const AplicarProvas = () => {
  const [alunos, setAlunos] = useState<any>([]);
  const [provas, setProvas] = useState<any>([]);
  const [provasAtribuidas, setProvasAtribuidas] = useState<any>([]);
  const theme = useTheme();

  useEffect(() => {
    const alunos = localStorage.getItem("alunos") || "[]";
    const provas = localStorage.getItem("provas") || "[]";

    setAlunos(JSON.parse(alunos));
    setProvas(JSON.parse(provas));
  }, []);

  const handleSelectUser = (aluno: any) => {
    setAlunos(
      alunos.map((estudante: any) => ({
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
      provas.map((prova: any) => ({
        ...prova,
        selected: false,
        ...(prova.nomeProva === teste.nomeProva && {
          selected: true,
        }),
      }))
    );
  };

  const verificaSeExisteAtribuicao = () => {
    const selectedAluno = alunos.find(
      (aluno: any) => aluno?.selected
    )?.username;
    const selectedProvas = provas.find((prova: any) => prova?.selected);

    const provasAtribuidas = JSON.parse(
      localStorage.getItem("provasAtribuidas") || "[]"
    );

    const hasProvaAtribuida = provasAtribuidas.find(
      (estudante: any) => estudante.username === selectedAluno
    );

    if (hasProvaAtribuida) {
      const indexProvaAtribuida = provasAtribuidas.indexOf(hasProvaAtribuida);
      provasAtribuidas[indexProvaAtribuida].provas.push(selectedProvas);
      localStorage.setItem(
        "provasAtribuidas",
        JSON.stringify(provasAtribuidas)
      );
      return;
    }

    if (!hasProvaAtribuida) {
      localStorage.setItem(
        "provasAtribuidas",
        JSON.stringify([
          ...provasAtribuidas,
          { username: selectedAluno, provas: [selectedProvas] },
        ])
      );
      return;
    }
  };

  const createProva = () => {
    const selectedAluno = alunos.find(
      (aluno: any) => aluno?.selected
    )?.username;
    const selectedProvas = provas.find((prova: any) => prova?.selected);

    const provasAtribuidas = JSON.parse(
      localStorage.getItem("provasAtribuidas") || "[]"
    );

    if (provasAtribuidas.length === 0) {
      localStorage.setItem(
        "provasAtribuidas",
        JSON.stringify([{ username: selectedAluno, provas: [selectedProvas] }])
      );
      return;
    }
    verificaSeExisteAtribuicao();
  };

  return (
    <Box marginX="auto" maxWidth={1100}>
      <Box mt={50} display="flex">
        <Container height={500} width={300}>
          <Box display="flex" justifyContent="flex-start" mt={20}>
            <Text
              text="Selecione um aluno"
              color={theme.colors.signUp.singUpText}
              fontSize={20}
              fontWeight="bold"
            />
          </Box>
          <Box mt={24} scrollY height={415}>
            {alunos?.map((aluno: any) => (
              <Box mt={3}>
                <Text
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
          <Box mt={24} scrollY height={415}>
            {provas?.map((prova: any) => (
              <Box mt={3}>
                <Text
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
          <Box mt={24} scrollY height={415}>
            {provasAtribuidas?.map((prova: any) => (
              <Box mt={3}>
                <Text
                  onClick={() => handleSelectProva(prova)}
                  text={prova?.username}
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
      </Box>
      <Box display="flex" justifyContent="center" mt={50}>
        <Button
          onClick={createProva}
          text="Atribuir prova"
          width={350}
          height={60}
          borderRadius={8}
          fontWeight="bold"
          fontSize={18}
          color={theme.colors.signUp.singUpText}
          teacherBtn
        />
      </Box>
    </Box>
  );
};

export default AplicarProvas;
