import React from "react";
import { ColorProps, SpaceProps } from "styled-system";

export interface BoxProps extends ColorProps, SpaceProps {
  children?: React.ReactElement | React.ReactNode;
}
