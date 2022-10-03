import { MarginProps } from "styled-system";

export interface AlternativeInputType extends MarginProps {
  selected?: boolean;
  backgroundColor?: string;
  isCorrect?: boolean;
  isIncorrect?: boolean;
}
