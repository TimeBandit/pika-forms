import React from "react";
import styled from "styled-components";
import theme from "../../core/theme/theme";

const P = styled.p`
  font-size: ${theme.fonts.size[24]};
`;

interface ParagraphProps {
  text?: string;
}

const Paragraph = ({ text }: ParagraphProps) => {
  return <P>{text}</P>;
};

export default Paragraph;
