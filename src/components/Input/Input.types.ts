import { FontSizeProps, HeightProps, WidthProps } from "styled-system";

export interface InputProps extends WidthProps, HeightProps, FontSizeProps {
  label?: string;
  type?: string;
  onChange?: (
    event: React.ChangeEvent<{ name?: string; value: string }>
  ) => void;
  value?: string | number;
}
