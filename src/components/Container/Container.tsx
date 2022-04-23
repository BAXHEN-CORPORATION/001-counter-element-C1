import React from "react";
import { Root } from "./styles";

export interface ContainerProps {}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default Container;
