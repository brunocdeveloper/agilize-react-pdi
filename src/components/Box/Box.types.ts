import React from "react";
import {
  ColorProps,
  DisplayProps,
  SpaceProps,
  JustifyContentProps,
} from "styled-system";

export interface BoxProps
  extends ColorProps,
    SpaceProps,
    DisplayProps,
    JustifyContentProps {
  children?: React.ReactElement | React.ReactNode;
}
