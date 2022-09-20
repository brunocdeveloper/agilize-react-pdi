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
import ContainerDeCadastro from "./ContainerDeCadastro";
import ContainerListaDeQuestoes from "./ContainerListaDeQuestoes";

const CadastroQuestoes: React.FC = () => {
  const [questoesCadastradas, setQuestoesCadastradas] = useState<any>([]);

  useEffect(() => {
    const questoes = localStorage.getItem("questoes") || "[]";
    setQuestoesCadastradas(JSON.parse(questoes));
  }, []);

  return (
    <Box display="flex" mt={50} mb={40} maxWidth={1300} marginX="auto">
      <ContainerDeCadastro setQuestoesCadastradas={setQuestoesCadastradas} />

      <ContainerListaDeQuestoes
        setQuestoesCadastradas={setQuestoesCadastradas}
        questoesCadastradas={questoesCadastradas}
      />
    </Box>
  );
};

export default CadastroQuestoes;
