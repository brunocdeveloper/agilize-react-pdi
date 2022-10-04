import { MarginProps } from "styled-system";

export interface AlternativeInputType extends MarginProps {
  selected?: boolean;
  backgroundColor?: string;
  isCorrect?: boolean;
  isIncorrect?: boolean;
}

export interface AlternativaType {
  alternativa: string;
  isCorreta: boolean;
}

export interface QuestoesType {
  alternativaFalsaA: string;
  alternativaFalsaB: string;
  alternativaFalsaC: string;
  alternativaFalsaD: string;
  chaveQuestao: string;
  id: number | string;
  questao: string;
  questaoCorreta: string;
  tema: string;
}

export interface ProvaType {
  id: number;
  nomeProva: string;
  questoes: QuestoesType[];
  selected?: boolean;
}
export interface ProvaAtribuidaTypes {
  username: string;
  provas: ProvaType[];
}

export interface SerializeDataTypes {
  questao: string;
  tema: string;
  chaveQuestao: string;
  alternativas: AlternativaType[];
}
