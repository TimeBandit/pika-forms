import React from "react";
import { useStore } from "../../store/useStore";

interface NextButtonProps {
  text?: string;
}
const NextButton = ({ text }: NextButtonProps) => {
  const { dispatch } = useStore();

  const nextPage = () => {
    dispatch({ type: "SURVEY_PAGE_DOWN" });
  };

  return <button onClick={nextPage}>{text}</button>;
};

export default NextButton;
