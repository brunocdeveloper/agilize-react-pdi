import React, { useEffect, useState } from "react";
import Box from "../../../components/Box/Box";
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
