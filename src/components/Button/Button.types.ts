import React from "react";
import {
  ColorProps,
  SpaceProps,
  WidthProps,
  HeightProps,
  BorderRadiusProps,
  FontWeightProps,
  FontSizeProps,
  BackgroundColorProps,
} from "styled-system";

export interface ButtonProps
  extends ColorProps,
    FontSizeProps,
    SpaceProps,
    WidthProps,
    BorderRadiusProps,
    FontWeightProps,
    BackgroundColorProps,
    HeightProps {
  text?: React.ReactNode | React.ReactElement | string;
  teacherBtn?: boolean;
  backgroundColor?: string;
  onClick?: (event?: React.ChangeEvent<any>) => void;
  type?: string;
}
