import React from "react";

import { PageElementType } from "../../store/survey/surveyActions";
import Blockquote from "../Elements/Blockquote";
import NextButton from "../Elements/NextButton";
import Paragraph from "../Elements/Paragraph";
import Picture from "../Elements/Picture";

interface Props {
  id: string;
  props: { type: PageElementType };
}

const PageElementFactory = ({ id, props }: Props) => {
  const { type, ...rest } = props;
  switch (type) {
    case "image":
      return <Picture {...rest} />;
    case "blockquote":
      return <Blockquote {...rest} />;
    case "next-button":
      return <NextButton {...rest} />;
    case "paragraph":
      return <Paragraph {...rest} />;
    default:
      return null;
  }
};

export default PageElementFactory;
