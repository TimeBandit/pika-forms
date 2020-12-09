import React from "react";
import styled from "styled-components";
import theme from "../../core/theme/theme";

const P = styled.p`
  font-size: ${theme.fonts.size[24]};
`;

interface OptionsProps {
  text?: string;
}

const Options = ({ text }: OptionsProps) => {
  return <P>{text}</P>;
};

export default Options;
