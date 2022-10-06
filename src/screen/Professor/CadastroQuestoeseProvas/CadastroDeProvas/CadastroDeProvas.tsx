import { CircularProgress } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import TrashIcon from "../../../../assets/TrashIcon";
import Box from "../../../../components/Box/Box";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import Text from "../../../../components/Text/Text";
import { useFetch } from "../../../../utils/useFetch/useFetch";
import { Container } from "../../../Login/Login.style";
import { CadastroDeProvasProps } from "../CadastroQuestoes/CadastroQuestoes.types";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { QuestoesType } from "../../../Aluno/Aluno.types";

const CadastroDeProvas = (props: CadastroDeProvasProps) => {
  const { questoesCadastradas, setQuestoesCadastradas } = props;
  const theme = useTheme();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const [createdProva, setCreatedProva] = useState(false);
  const nomeProva = watch("nomeProva");

  const handleSuccesCreate = () => {
    setCreatedProva(true);
    setTimeout(() => {
      setCreatedProva(false);
    }, 2000);
  };

  const { data, isLoading, doFetch } = useFetch("/criar-prova", "post", {
    onSuccess: () => {
      handleSuccesCreate();
      const questoes = localStorage.getItem("questoes") || "[]";
      if (localStorage.getItem("provas") !== null) {
        const provas = localStorage.getItem("provas") || "[]";

        const newProva = [
          {
            nomeProva,
            id: new Date().getTime(),
            questoes: [...JSON.parse(questoes)],
          },
          ...JSON.parse(provas),
        ];
        localStorage.setItem("provas", JSON.stringify(newProva));
        localStorage.removeItem("questoes");
        setQuestoesCadastradas([]);
      }

      if (localStorage.getItem("provas") === null) {
        const newQuestao = [
          {
            nomeProva,
            id: new Date().getTime(),
            questoes: [...JSON.parse(questoes)],
          },
        ];
        localStorage.setItem("provas", JSON.stringify(newQuestao));
        localStorage.removeItem("questoes");
        setQuestoesCadastradas([]);
      }
      reset({
        nomeProva: "",
      });
    },
  });

  const deleteQuestao = (id: string | number) => {
    const questoes = localStorage.getItem("questoes") || "[]";
    const parseQuestoes = JSON.parse(questoes);
    localStorage.setItem(
      "questoes",
      JSON.stringify(
        parseQuestoes.filter((item: QuestoesType) => item.id !== id)
      )
    );
    setQuestoesCadastradas(
      parseQuestoes.filter((item: QuestoesType) => item.id !== id)
    );
  };

  const createProva = () => {
    doFetch();
  };

  return (
    <Container height={730} width={450}>
      <Box display="flex" justifyContent="flex-start" mt={20}>
        <Text
          text="Questões ja cadastradas"
          color={theme.colors.signUp.singUpText}
          fontSize={20}
          fontWeight="bold"
        />
      </Box>
      <Box
        mt={20}
        height={650}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box height={500} scrollY>
          {questoesCadastradas.map((questions: QuestoesType, index: number) => (
            <Box
              mt={15}
              display="flex"
              justifyContent="space-between"
              key={questions.id}
            >
              <Text
                text={`${index + 1} - ${questions.questao}`}
                color={theme.colors.signUp.singUpText}
                fontSize={18}
              />
              <Button
                onClick={() => deleteQuestao(questions?.id)}
                border="transparent"
                opacityOnClick
              >
                <TrashIcon
                  width={20}
                  height={20}
                  fill={theme.colors.signUp.singUpButton}
                />
              </Button>
            </Box>
          ))}
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box height={50}>
            <Controller
              name="nomeProva"
              control={control}
              rules={{ required: "Campo obrigatório" }}
              render={({ field: { onChange, value } }) => (
                <Input
                  data-testid="cadastrarProvaId"
                  onChange={onChange}
                  value={value}
                  label="Digite o nome da prova"
                  width="90%"
                  height={40}
                  error={errors?.nomeProva?.message}
                  fontSize={16}
                />
              )}
            />
          </Box>
          <Button
            onClick={handleSubmit(createProva)}
            mt={40}
            text="Criar prova"
            width={180}
            height={60}
            borderRadius={8}
            fontWeight="bold"
            fontSize={18}
            color={theme.colors.signUp.singUpText}
            teacherBtn
            disabled={isLoading || questoesCadastradas?.length === 0}
            loading={
              isLoading && <CircularProgress size="18px" color="inherit" />
            }
          />
        </Box>
      </Box>
      {createdProva && (
        <Stack sx={{ width: "100%" }} mt="3px">
          <Alert severity="success">{data?.message}</Alert>
        </Stack>
      )}
    </Container>
  );
};

export default CadastroDeProvas;
