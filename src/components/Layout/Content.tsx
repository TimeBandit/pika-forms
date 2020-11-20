import React, { useEffect } from "react";
import styled from "styled-components";

import useLoadData from "../../hooks/useLoadData";
import { useStore } from "../../store/useStore";
import SurveyPage from "../Elements/SurveyPage";

const ContentWrapper = styled.ul`
  list-style: none;
`;

const Content = () => {
  const data = useLoadData();
  const { state, dispatch } = useStore();

  useEffect(() => {
    document.title = data.title ?? "";
    dispatch({ type: "SURVEY_LOAD", payload: data });
  }, [data, dispatch]);

  useEffect(() => {
    const currentQuestionElement = document.getElementById(state.currentId.toString());
    currentQuestionElement?.scrollIntoView();
  }, [state.currentId]);

  return (
    <ContentWrapper>
      {state.survey.pages &&
        state.survey.pages.map((page, index) => <SurveyPage page={page} key={index} />)}
    </ContentWrapper>
  );
};

export default Content;
