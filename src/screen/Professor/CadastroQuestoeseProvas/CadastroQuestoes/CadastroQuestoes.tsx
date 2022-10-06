import { Controller, useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import Box from "../../../../components/Box/Box";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import { Label } from "../../../../components/Input/Input.styles";
import Text from "../../../../components/Text/Text";
import { Container } from "../../../Login/Login.style";
import { TextArea } from "./CadastroQuestoes.style";
import { CadastroDeQuestoesProps } from "./CadastroQuestoes.types";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useFetch } from "../../../../utils/useFetch/useFetch";
import { CircularProgress } from "@mui/material";

const CadastroDeQuestoes = (props: CadastroDeQuestoesProps) => {
  const { setQuestoesCadastradas } = props;
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onSubmit",
  });
  const [createQuestao, setCreateQuestao] = useState(false);
  const questao = watch("questao");
  const tema = watch("tema");
  const questaoCorreta = watch("questaoCorreta");
  const alternativaFalsaA = watch("alternativaFalsaA");
  const alternativaFalsaB = watch("alternativaFalsaB");
  const alternativaFalsaC = watch("alternativaFalsaC");
  const alternativaFalsaD = watch("alternativaFalsaD");

  const handleSuccesCreate = () => {
    setCreateQuestao(true);
    setTimeout(() => {
      setCreateQuestao(false);
    }, 2000);
  };

  const { data, isLoading, doFetch } = useFetch("/criar-questao", "post", {
    onSuccess: () => {
      handleSuccesCreate();

      if (localStorage.getItem("questoes") !== null) {
        const questoes = localStorage.getItem("questoes") || "[]";
        const newQuestao = [
          ...JSON.parse(questoes),
          {
            chaveQuestao: `questao${JSON.parse(questoes).length + 1}`,
            questao,
            tema,
            questaoCorreta,
            alternativaFalsaA,
            alternativaFalsaB,
            alternativaFalsaC,
            alternativaFalsaD,
            id: new Date().getTime(),
          },
        ];

        localStorage.setItem("questoes", JSON.stringify(newQuestao));
        setQuestoesCadastradas(newQuestao);
      }

      if (localStorage.getItem("questoes") === null) {
        const newQuestao = [
          {
            chaveQuestao: `questao${1}`,
            questao,
            tema,
            questaoCorreta,
            alternativaFalsaA,
            alternativaFalsaB,
            alternativaFalsaC,
            alternativaFalsaD,
            id: new Date().getTime(),
          },
        ];
        localStorage.setItem("questoes", JSON.stringify(newQuestao));
        setQuestoesCadastradas(newQuestao);
      }

      reset({
        questao: "",
        tema: "",
        questaoCorreta: "",
        alternativaFalsaA: "",
        alternativaFalsaB: "",
        alternativaFalsaC: "",
        alternativaFalsaD: "",
      });
    },
  });

  const onSubmit = () => {
    doFetch();
  };

  return (
    <Container width={700} height={730}>
      <Box display="flex" justifyContent="flex-start" mt={20}>
        <Text
          text="Cadastre questões"
          color={theme.colors.signUp.singUpText}
          fontSize={20}
          fontWeight="bold"
        />
      </Box>
      <Box mt={20}>
        <Label>Digite aqui a questão</Label>
        <Controller
          name="questao"
          control={control}
          rules={{ required: "Campo obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <TextArea
              data-testid="questaoId"
              onChange={onChange}
              error={errors?.questao?.message}
              placeholder={errors?.questao?.message}
              value={value}
            />
          )}
        />
      </Box>
      <Box mt={20}>
        <Controller
          name="tema"
          control={control}
          rules={{ required: "Campo obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <Input
              data-testid="temaId"
              label="Digite aqui o tema da questão"
              width="100%"
              height={40}
              fontSize={16}
              onChange={onChange}
              value={value}
              error={errors?.tema?.message}
            />
          )}
        />
      </Box>
      <Box mt={20}>
        <Controller
          name="questaoCorreta"
          control={control}
          rules={{ required: "Campo obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <Input
              data-testId="questaoCorretaId"
              onChange={onChange}
              value={value}
              label="Digite aqui a alternativa correta"
              width="100%"
              height={40}
              fontSize={16}
              correctlyQuestion
              error={errors?.questaoCorreta?.message}
            />
          )}
        />
      </Box>
      <Box mt={20}>
        <Controller
          name="alternativaFalsaA"
          control={control}
          rules={{ required: "Campo obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <Input
              data-testid="alternativaFalsaAId"
              onChange={onChange}
              value={value}
              label="Digite abaixo qual serão as alternativas falsas"
              width="100%"
              height={40}
              fontSize={16}
              incorrectlyQuestion
              error={errors?.alternativaFalsaA?.message}
            />
          )}
        />
      </Box>
      <Box mt={20}>
        <Controller
          name="alternativaFalsaB"
          control={control}
          rules={{ required: "Campo obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <Input
              data-testid="alternativaFalsaBId"
              onChange={onChange}
              value={value}
              width="100%"
              height={40}
              fontSize={16}
              incorrectlyQuestion
              error={errors?.alternativaFalsaB?.message}
            />
          )}
        />
      </Box>
      <Box mt={20}>
        <Controller
          name="alternativaFalsaC"
          control={control}
          rules={{ required: "Campo obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <Input
              data-testid="alternativaFalsaCId"
              onChange={onChange}
              value={value}
              width="100%"
              height={40}
              fontSize={16}
              incorrectlyQuestion
              error={errors?.alternativaFalsaC?.message}
            />
          )}
        />
      </Box>
      <Box mt={20}>
        <Controller
          name="alternativaFalsaD"
          control={control}
          rules={{ required: "Campo obrigatório" }}
          render={({ field: { onChange, value } }) => (
            <Input
              data-testid="alternativaFalsaDId"
              onChange={onChange}
              value={value}
              width="100%"
              height={40}
              fontSize={16}
              incorrectlyQuestion
              error={errors?.alternativaFalsaD?.message}
            />
          )}
        />
      </Box>

      <Box display="flex" justifyContent="center">
        <Button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          mt={40}
          text="Criar"
          width={350}
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

      {createQuestao && (
        <Stack sx={{ width: "100%" }} mt="3px">
          <Alert severity="success">{data?.message}</Alert>
        </Stack>
      )}
    </Container>
  );
};

export default CadastroDeQuestoes;
