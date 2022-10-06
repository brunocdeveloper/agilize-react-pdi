import { useState } from "react";
import Box from "../../components/Box/Box";
import AplicarProvas from "./AplicarProvas/AplicarProvas";
import CadastroAluno from "./CadastroAlunos/CadastroAluno";
import CadastroQuestoes from "./CadastroQuestoeseProvas/CadastroQuestoes";
import StepIndicator from "./StepIndicator/StepIndicator";

const Professor = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [stepProfessor, setStepProfessor] = useState("aluno");

  const saveAutentication = () => {
    const credentials = {
      username,
      password,
    };
    localStorage.setItem("aluno", JSON.stringify(credentials));

    setUsername("");
    setPassword("");
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <StepIndicator
          steperProfessor={stepProfessor}
          setSteperProfessor={setStepProfessor}
        />
      </Box>
      {stepProfessor === "aluno" && <CadastroAluno />}

      {stepProfessor === "questoes" && <CadastroQuestoes />}
      {stepProfessor === "aplicarProvas" && <AplicarProvas />}
    </Box>
  );
};

export default Professor;
