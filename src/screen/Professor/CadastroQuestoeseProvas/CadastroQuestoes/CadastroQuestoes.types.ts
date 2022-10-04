export interface TextAreaProps {
  error?: string;
}

export interface CadastroDeQuestoesProps {
  setQuestoesCadastradas: (data: any) => void;
}

export interface CadastroDeProvasProps {
  questoesCadastradas: any;
  setQuestoesCadastradas: (data: any) => void;
}
