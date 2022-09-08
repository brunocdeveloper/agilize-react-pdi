import {
  BorderColorProps,
  FontSizeProps,
  HeightProps,
  WidthProps,
} from "styled-system";

export interface InputProps
  extends WidthProps,
    HeightProps,
    FontSizeProps,
    BorderColorProps {
  label?: string;
  type?: string;
  onChange?: (
    event: React.ChangeEvent<{ name?: string; value: string }>
  ) => void;
  value?: string | number;
  placeholder?: string;
  correctlyQuestion?: boolean;
  incorrectlyQuestion?: boolean;
}
