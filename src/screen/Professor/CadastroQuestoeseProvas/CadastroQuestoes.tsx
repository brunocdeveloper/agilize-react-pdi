import React, { useEffect, useState } from "react";
import { Container } from "./CadastroQuestoes/CadastroQuestoes.style";
import CadastroDeProvas from "./CadastroDeProvas/CadastroDeProvas";
import CadastroDeQuestoes from "./CadastroQuestoes/CadastroQuestoes";

const CadastroQuestoes: React.FC = () => {
  const [questoesCadastradas, setQuestoesCadastradas] = useState<any>([]);

  useEffect(() => {
    const questoes = localStorage.getItem("questoes") || "[]";
    setQuestoesCadastradas(JSON.parse(questoes));
  }, []);

  return (
    <Container>
      <CadastroDeQuestoes setQuestoesCadastradas={setQuestoesCadastradas} />

      <CadastroDeProvas
        setQuestoesCadastradas={setQuestoesCadastradas}
        questoesCadastradas={questoesCadastradas}
      />
    </Container>
  );
};

export default CadastroQuestoes;
