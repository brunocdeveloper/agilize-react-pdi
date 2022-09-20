export interface TextAreaProps {
  error?: string;
}

export interface ContainerDeCadastroProps {
  setQuestoesCadastradas: (data: any) => void;
}

export interface ContainerListaQuestoesProps {
  questoesCadastradas: any;
  setQuestoesCadastradas: (data: any) => void;
}
