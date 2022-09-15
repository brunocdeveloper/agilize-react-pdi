import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import Box from "../../../components/Box/Box";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import { Label } from "../../../components/Input/Input.styles";
import Text from "../../../components/Text/Text";
import { Container } from "../../Login/Login.style";
import { IMG, TextArea } from "./CadastroQuestoes.style";
import { useForm, Controller } from "react-hook-form";
import trashIcon from "../../../assets/trash-icon.svg";
import TrashIcon from "../../../assets/TrashIcon";
import { parse } from "@babel/core";

const CadastroQuestoes: React.FC = () => {
  const theme = useTheme();
  const [questoesCadastradas, setQuestoesCadastradas] = useState<any>([]);
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  useEffect(() => {
    const questoes = localStorage.getItem("questoes") || "[]";
    setQuestoesCadastradas(JSON.parse(questoes));
  }, []);

  const onSubmit = (data: any) => {
    if (localStorage.getItem("questoes") !== null) {
      const questoes = localStorage.getItem("questoes") || "[]";
      const newQuestao = [
        ...JSON.parse(questoes),
        { ...data, id: new Date().getTime() },
      ];
      console.log(newQuestao);
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

  const deleteQuestao = (id: string) => {
    const questoes = localStorage.getItem("questoes") || "[]";
    const parseQuestoes = JSON.parse(questoes);
    localStorage.setItem(
      "questoes",
      JSON.stringify(parseQuestoes.filter((item: any) => item.id !== id))
    );
    setQuestoesCadastradas(parseQuestoes.filter((item: any) => item.id !== id));
  };

  return (
    <Box display="flex" justifyContent="center" mt={50} mb={40}>
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
            {questoesCadastradas.map((questions: any, index: any) => (
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
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box height={50}>
              <Input
                label="Digite o nome da prova"
                width="90%"
                height={40}
                fontSize={16}
              />
            </Box>
            <Button
              type="submit"
              mt={40}
              text="Criar prova"
              width={180}
              height={60}
              borderRadius={8}
              fontWeight="bold"
              fontSize={18}
              color={theme.colors.signUp.singUpText}
              teacherBtn
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CadastroQuestoes;
