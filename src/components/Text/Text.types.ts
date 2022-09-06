import {
  ColorProps,
  DisplayProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  SpaceProps,
  WidthProps,
} from "styled-system";

export interface TextProps
  extends DisplayProps,
    SpaceProps,
    WidthProps,
    LineHeightProps,
    ColorProps,
    FontWeightProps,
    FontSizeProps {
  text?: string;
}
