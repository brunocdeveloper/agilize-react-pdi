import React from "react";
import {
  ColorProps,
  DisplayProps,
  SpaceProps,
  JustifyContentProps,
  HeightProps,
  WidthProps,
  BorderRadiusProps,
} from "styled-system";

export interface BoxProps
  extends ColorProps,
    SpaceProps,
    DisplayProps,
    HeightProps,
    WidthProps,
    BorderRadiusProps,
    JustifyContentProps {
  children?: React.ReactElement | React.ReactNode;
  onClick?: () => void;
}
