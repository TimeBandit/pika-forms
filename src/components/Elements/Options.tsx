import React from "react";
import styled from "styled-components";
import theme from "../../core/theme/theme";

const P = styled.p`
  font-size: ${theme.fonts.size[24]};
`;

interface OptionProps {
  id: string;
  options: [{ image: string; text: string }];
}
// TODO options has no type, this should be the page type
const Options = ({ id, options }: OptionProps) => {
  return <P>soemtin</P>;
};

export default Options;
