import React from "react";
import {
  ColorProps,
  DisplayProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  SpaceProps,
  TextAlignProps,
  WidthProps,
} from "styled-system";

export interface TextProps
  extends DisplayProps,
    SpaceProps,
    WidthProps,
    LineHeightProps,
    ColorProps,
    FontWeightProps,
    TextAlignProps,
    FontSizeProps {
  text?: string | React.ReactElement | React.ReactNode;
  onClick?: (event?: React.ChangeEvent<any>) => void;
}
