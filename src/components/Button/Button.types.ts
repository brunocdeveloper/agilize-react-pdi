import React from "react";
import {
  ColorProps,
  SpaceProps,
  WidthProps,
  HeightProps,
  BorderRadiusProps,
  FontWeightProps,
  FontSizeProps,
} from "styled-system";

export interface ButtonProps
  extends ColorProps,
    FontSizeProps,
    SpaceProps,
    WidthProps,
    BorderRadiusProps,
    FontWeightProps,
    HeightProps {
  text?: React.ReactNode | React.ReactElement | string;
  teacherBtn?: boolean;
}
