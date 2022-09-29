import React, { useEffect, useState } from "react";
import Box from "../../../components/Box/Box";
import { Container } from "./CadastroQuestoes.style";
import ContainerDeCadastro from "./ContainerDeCadastro";
import ContainerListaDeQuestoes from "./ContainerListaDeQuestoes";

const CadastroQuestoes: React.FC = () => {
  const [questoesCadastradas, setQuestoesCadastradas] = useState<any>([]);

  useEffect(() => {
    const questoes = localStorage.getItem("questoes") || "[]";
    setQuestoesCadastradas(JSON.parse(questoes));
  }, []);

  return (
    <Container>
      <ContainerDeCadastro setQuestoesCadastradas={setQuestoesCadastradas} />

      <ContainerListaDeQuestoes
        setQuestoesCadastradas={setQuestoesCadastradas}
        questoesCadastradas={questoesCadastradas}
      />
    </Container>
  );
};

export default CadastroQuestoes;
