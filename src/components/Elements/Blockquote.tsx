import React from "react";

interface BlockquoteProps {
  text?: string;
}
const Blockquote = ({ text }: BlockquoteProps) => {
  return <blockquote>{text}</blockquote>;
};

export default Blockquote;
