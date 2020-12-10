import React from "react";
import { PageElementType } from "../../store/survey/surveyActions";
import Blockquote from "../Elements/Blockquote";
import NextButton from "../Elements/NextButton";
import Options from "../Elements/Options";
import Paragraph from "../Elements/Paragraph";
import Picture from "../Elements/Picture";

interface Props {
  id: string;
  props: { type: PageElementType };
}

const PageElementFactory = ({ id, props }: Props) => {
  const { type, ...rest } = props;
  switch (type) {
    case "blockquote":
      return <Blockquote {...rest} />;
    case "image":
      return <Picture {...rest} />;
    case "next-button":
      return <NextButton {...rest} />;
    case "options":
      return <Options id={id} {...rest} />;
    case "paragraph":
      return <Paragraph {...rest} />;
    case "secondary":
      return null;
    case "submit":
      return null;
    default:
      return null;
  }
};

export default PageElementFactory;
