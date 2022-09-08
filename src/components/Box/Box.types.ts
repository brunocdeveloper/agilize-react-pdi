import React from "react";
import {
  ColorProps,
  DisplayProps,
  SpaceProps,
  JustifyContentProps,
  HeightProps,
  WidthProps,
  BorderRadiusProps,
  AlignItemsProps,
} from "styled-system";

export interface BoxProps
  extends ColorProps,
    SpaceProps,
    DisplayProps,
    HeightProps,
    WidthProps,
    BorderRadiusProps,
    AlignItemsProps,
    JustifyContentProps {
  children?: React.ReactElement | React.ReactNode;
  onClick?: () => void;
}
