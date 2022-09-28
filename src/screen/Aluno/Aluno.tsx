import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import BookIcon from "../../assets/BookIcon";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { useUserContext } from "../../context/UserContext";
import { useFetch } from "../../utils/useFetch/useFetch";
import { Container } from "../Login/Login.style";
import { StyledText } from "./Aluno.style";

interface ProvaType {
  id: number;
  nomeProva: string;
  questoes: [];
  selected: boolean;
}

const Aluno = () => {
  const [provas, setProvas] = useState([]);
  const [selectedProva, setSelectedProva] = useState<ProvaType>();
  const theme = useTheme();
  const { setIsLoged, user } = useUserContext();

  const {
    data,
    isLoading,
    doFetch,
    setData: updateData,
  } = useFetch(`/prova/${selectedProva?.nomeProva}/quetoes`, "get");
  const iniciarProva = async () => {
    await doFetch();
    updateData(selectedProva);
  };

  useEffect(() => {
    const provasJaAtribuidas = JSON.parse(
      localStorage.getItem("provasAtribuidas") || "[]"
    );
    const [provas] = provasJaAtribuidas.filter(
      (prova: any) => prova.username === user
    );
    setProvas(provas.provas);
  }, []);

  const selectProva = (prova: ProvaType) => {
    setSelectedProva(prova);
  };

  const shuffleQuestoes = (array: any) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const serializeData = data?.questoes.map((questoes: any) => ({
    questao: questoes.questao,
    tema: questoes.tema,
    alternativas: shuffleQuestoes([
      { alternativa: questoes.alternativaFalsaA, isCorreta: false },
      { alternativa: questoes.alternativaFalsaB, isCorreta: false },
      { alternativa: questoes.alternativaFalsaC, isCorreta: false },
      { alternativa: questoes.alternativaFalsaD, isCorreta: false },
      { alternativa: questoes.questaoCorreta, isCorreta: true },
    ]),
  }));

  return (
    <Box paddingBottom={60}>
      <Box
        height={20}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        padding={25}
        mb={20}
      >
        <StyledText
          onClick={() => setIsLoged(false)}
          text="Sair"
          fontSize={20}
          fontWeight="bold"
          color={theme.colors.white}
        />
      </Box>
      <Container
        width={750}
        padding={4}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Box>
            <Text
              text={`Bem vindo ${user}`}
              color={theme.colors.signUp.singUpText}
              fontSize={20}
              fontWeight="bold"
            />
          </Box>

          <Text
            mt={20}
            text={`Escolha uma prova e clique em começar:`}
            color={theme.colors.signUp.singUpText}
            fontSize={18}
          />

          {provas &&
            provas.map((prova: ProvaType) => (
              <Box width="100%" display="flex">
                <StyledText
                  onClick={() => selectProva(prova)}
                  selected={selectedProva?.nomeProva === prova.nomeProva}
                  mt={20}
                  text={prova.nomeProva}
                  color={theme.colors.signUp.singUpText}
                />
              </Box>
            ))}
        </Box>
        <Box alignSelf="flex-end">
          <Button
            onClick={iniciarProva}
            text="Iniciar"
            width={200}
            height={60}
            borderRadius={8}
            fontSize={18}
            color={theme.colors.signUp.singUpText}
            disabled={isLoading}
            loading={
              isLoading && <CircularProgress size="18px" color="inherit" />
            }
            opacityOnClick
          />
        </Box>
      </Container>

      {serializeData &&
        serializeData.map((questao: any) => (
          <Container width={750} mt={4} paddingX={4} paddingY={3} height="100%">
            <Box display="flex" alignItems="center">
              <BookIcon width={30} height={30} fill={theme.colors.bookIcon} />
              <Text ml={2} text={`Pergunta relacionada ao tema`} />
              <Text fontWeight="bold" ml={2} text={` #${questao.tema}`} />
            </Box>
            <Box mt={4}>
              <Text text={questao.questao} />
            </Box>
            <Box mt="25px">
              {questao.alternativas.map((alternativa: any) => (
                <Text mt={3} text={alternativa.alternativa} />
              ))}
            </Box>
          </Container>
        ))}
    </Box>
  );
};

export default Aluno;
