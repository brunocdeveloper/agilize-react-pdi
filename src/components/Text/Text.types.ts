import React from "react";
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
  text?: string | React.ReactElement | React.ReactNode;
}
