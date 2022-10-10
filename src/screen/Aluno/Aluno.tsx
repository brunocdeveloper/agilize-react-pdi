import { Alert, CircularProgress, Stack } from "@mui/material";
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
import { Alternative, StyledText } from "./Aluno.style";
import {
  AlternativaType,
  ProvaAtribuidaTypes,
  ProvaType,
  QuestoesType,
  SerializeDataTypes,
} from "./Aluno.types";

const Aluno = () => {
  const [provas, setProvas] = useState([]);
  const [selectedProva, setSelectedProva] = useState<ProvaType>();
  const theme = useTheme();
  const { user } = useUserContext();
  const [isStartedProva, setIsStartedProva] = useState(true);
  const { watch, setValue, getValues } = useForm();
  const { setCount, Count } = useCountDown(60);
  const [erroConcluirProva, setErrorConcluirProva] = useState(false);

  const handleErrorconcluir = () => {
    setErrorConcluirProva(true);
    setTimeout(() => {
      setErrorConcluirProva(false);
    }, 2000);
  };

  const {
    data,
    isLoading,
    doFetch,
    setData: updateData,
  } = useFetch(`/prova/${selectedProva?.nomeProva}/quetoes`, "get");

  const {
    data: resultProva,
    isLoading: isLoadingConcluirProva,
    doFetch: fetchConcluirProva,
  } = useFetch("/concluir-prova", "get");

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
      (prova: ProvaAtribuidaTypes) => prova.username === user
    );
    setProvas(provas?.provas);
  }, []);

  const selectProva = (prova: ProvaType) => {
    setSelectedProva(prova);
  };

  const shuffleQuestoes = (array: AlternativaType[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const serializeData = useMemo(() => {
    return data?.questoes.map((questoes: QuestoesType) => ({
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

  const verificaQuestoesPreenchidas = () => {
    return serializeData.some(
      (prova: QuestoesType) => !getValues(prova.chaveQuestao)
    );
  };

  const concluirProva = async () => {
    if (verificaQuestoesPreenchidas()) {
      handleErrorconcluir();
      return;
    }
    fetchConcluirProva();
  };

  const apuraQuestoes = () => {
    const acertos = serializeData?.filter(
      (prova: QuestoesType) => getValues(prova.chaveQuestao)?.isCorreta === true
    );

    const PONTUACAO_MAXIMA = 10;
    const quantidadeAcertos = acertos?.length;
    const quantidadeQuestoes = data?.questoes.length;
    const pontuacaoPorQuestao = PONTUACAO_MAXIMA / quantidadeQuestoes;
    const pontuacaoTotal = quantidadeAcertos * pontuacaoPorQuestao;

    return {
      acertos: quantidadeAcertos,
      pontuacaoTotal,
    };
  };
  apuraQuestoes();
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
        serializeData.map((questao: SerializeDataTypes) => (
          <Container width={750} mt={4} paddingX={4} paddingY={4} height="100%">
            <Box display="flex" alignItems="center">
              <BookIcon width={30} height={30} fill={theme.colors.bookIcon} />
              <Text
                ml={2}
                text={`Pergunta relacionada ao tema`}
                color={theme.colors.signUp.inputText}
              />
              <Text
                fontWeight="bold"
                ml={2}
                text={` #${questao.tema}`}
                color={theme.colors.signUp.inputText}
              />
            </Box>
            <Box mt={4}>
              <Text
                fontSize={20}
                text={questao.questao}
                color={theme.colors.signUp.inputText}
              />
            </Box>
            <Box mt="15px" display="flex" flexDirection="column">
              {questao.alternativas.map((alternativa: AlternativaType) => (
                <Alternative
                  onClick={() => {
                    setValue(questao.chaveQuestao, alternativa);
                  }}
                  mt={2}
                  isCorrect={resultProva && alternativa.isCorreta === true}
                  isIncorrect={resultProva && alternativa.isCorreta === false}
                  selected={
                    watch(questao.chaveQuestao)?.alternativa ===
                    alternativa.alternativa
                  }
                  readOnly
                >
                  {alternativa.alternativa}
                </Alternative>
              ))}
            </Box>
          </Container>
        ))}

      {serializeData && !resultProva && (
        <Box
          mt={30}
          display="flex"
          justifyContent="flex-end"
          width={750}
          marginX="auto"
        >
          <Button
            onClick={concluirProva}
            backgroundColor={theme.colors.signUp.container}
            text="Concluir"
            width={200}
            height={60}
            borderRadius={8}
            fontWeight="bold"
            fontSize={18}
            color={theme.colors.signUp.singUpText}
            disabled={isLoadingConcluirProva}
            teacherBtn
            loading={
              isLoadingConcluirProva && (
                <CircularProgress size="18px" color="inherit" />
              )
            }
          />
        </Box>
      )}

      {resultProva && (
        <Container width={750} mt={4} paddingX={4} paddingY={4} height="100%">
          <Box display="flex" justifyContent="flex-start">
            <Text
              text="Resultado da prova"
              color={theme.colors.signUp.singUpText}
              fontSize={20}
              fontWeight="bold"
            />
          </Box>

          <Box display="flex" justifyContent="flex-start">
            <Text
              mt={18}
              text={`Você acertou ${
                apuraQuestoes().acertos
              } questões e fez um total de ${apuraQuestoes().pontuacaoTotal.toFixed(
                2
              )} pontos`}
              color={theme.colors.signUp.singUpText}
              fontSize={20}
            />
          </Box>
        </Container>
      )}

      {erroConcluirProva && (
        <Box
          mt={-100}
          display="flex"
          justifyContent="center"
          width={750}
          marginX="auto"
        >
          <Stack sx={{ width: "60%" }}>
            <Alert severity="error">Responda todas as questões</Alert>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Aluno;
