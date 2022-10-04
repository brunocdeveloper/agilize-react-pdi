export interface CadastroAlunosProps {
  setUsername: (string: string) => void;
  setPassword: (string: string) => void;
  password: string | number;
  username: string | number;
  saveAutentication: (event: any) => void;
}

export interface CredenciaisTypes {
  username: string;
  password: string;
}
