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
  FlexDirectionProps,
  MaxWidthProps,
  PositionProps,
  AlignSelfProps,
  MinWidthProps,
} from "styled-system";

export interface BoxProps
  extends ColorProps,
    SpaceProps,
    DisplayProps,
    HeightProps,
    WidthProps,
    BorderRadiusProps,
    AlignItemsProps,
    FlexDirectionProps,
    MaxWidthProps,
    MinWidthProps,
    PositionProps,
    AlignSelfProps,
    JustifyContentProps {
  children?: React.ReactElement | React.ReactNode;
  onClick?: () => void;
  scrollY?: boolean;
}
