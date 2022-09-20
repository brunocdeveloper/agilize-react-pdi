import { Controller, useForm } from "react-hook-form";
import { useTheme } from "styled-components";
import Box from "../../../components/Box/Box";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { Label } from "../../../components/Input/Input.styles";
import Text from "../../../components/Text/Text";
import { Container } from "../../Login/Login.style";
import { TextArea } from "./CadastroQuestoes.style";
import { ContainerDeCadastroProps } from "./CadastroQuestoes.types";

const ContainerDeCadastro = (props: ContainerDeCadastroProps) => {
  const { setQuestoesCadastradas } = props;
  const theme = useTheme();
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    if (localStorage.getItem("questoes") !== null) {
      const questoes = localStorage.getItem("questoes") || "[]";
      const newQuestao = [
        ...JSON.parse(questoes),
        { ...data, id: new Date().getTime() },
      ];

      localStorage.setItem("questoes", JSON.stringify(newQuestao));
      setQuestoesCadastradas(newQuestao);
    }

    if (localStorage.getItem("questoes") === null) {
      const newQuestao = [{ ...data, id: new Date().getTime() }];
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
          teacherBtn
        />
      </Box>
    </Container>
  );
};

export default ContainerDeCadastro;
