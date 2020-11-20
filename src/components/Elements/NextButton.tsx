import React from "react";

interface NextButtonProps {
  text?: string;
}
const NextButton = ({ text }: NextButtonProps) => {
  return <button>{text}</button>;
};

export default NextButton;
