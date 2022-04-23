import React from "react";
import { Root } from "./styles";

export interface SectionProps {}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default Section;
