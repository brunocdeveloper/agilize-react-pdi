import { CircularProgress } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import BookIcon from "../../assets/BookIcon";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import useCountDown from "../../components/CountDown/CountDown";
import Text from "../../components/Text/Text";
import { useUserContext } from "../../context/UserContext";
import { useFetch } from "../../utils/useFetch/useFetch";
import { Container } from "../Login/Login.style";
import { AlternativeInput, StyledText } from "./Aluno.style";

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
  const { user, isStartedProva, setIsStartedProva } = useUserContext();
  const { watch, setValue } = useForm();
  const { setCount, Count } = useCountDown(60);

  const {
    data,
    isLoading,
    doFetch,
    setData: updateData,
  } = useFetch(`/prova/${selectedProva?.nomeProva}/quetoes`, "get");

  const iniciarProva = async () => {
    await doFetch();
    updateData(selectedProva);
    setCount();
    setIsStartedProva(false);
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

  const serializeData = useMemo(() => {
    return data?.questoes.map((questoes: any) => ({
      questao: questoes.questao,
      tema: questoes.tema,
      chaveQuestao: questoes.chaveQuestao,
      alternativas: shuffleQuestoes([
        { alternativa: questoes.alternativaFalsaA, isCorreta: false },
        { alternativa: questoes.alternativaFalsaB, isCorreta: false },
        { alternativa: questoes.alternativaFalsaC, isCorreta: false },
        { alternativa: questoes.alternativaFalsaD, isCorreta: false },
        { alternativa: questoes.questaoCorreta, isCorreta: true },
      ]),
    }));
  }, [data]);

  return (
    <Box paddingBottom={60}>
      <Box position="fixed" top={25} left={25}>
        <Count />
      </Box>

      {isStartedProva && (
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
              fontWeight="bold"
              fontSize={18}
              color={theme.colors.signUp.singUpText}
              disabled={isLoading}
              teacherBtn
              loading={
                isLoading && <CircularProgress size="18px" color="inherit" />
              }
            />
          </Box>
        </Container>
      )}

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
            <Box mt="15px" display="flex" flexDirection="column">
              {questao.alternativas.map((alternativa: any, index: any) => (
                <AlternativeInput
                  value={alternativa.alternativa}
                  onClick={() => {
                    setValue(questao.chaveQuestao, alternativa);
                  }}
                  mt={2}
                  selected={
                    watch(questao.chaveQuestao)?.alternativa ===
                    alternativa.alternativa
                  }
                  readOnly
                />
              ))}
            </Box>
          </Container>
        ))}
    </Box>
  );
};

export default Aluno;
