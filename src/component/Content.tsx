import React, { useEffect } from "react";
import styled from "styled-components";
import useLoadData from "../hooks/useLoadData";
import { useStore } from "../store/useStore";
import { Question } from "./Question";

const ContentWrapper = styled.ul`
  list-style: none;
`;

const Content = () => {
  const data = useLoadData();
  const { state, dispatch } = useStore();

  useEffect(() => {
    dispatch({ type: "LOAD_SURVEY", payload: data });
  }, [data, dispatch]);

  return (
    <ContentWrapper>
      {state.survey.pages &&
        state.survey.pages.map((page, index) => (
          <Question id={page.id} key={index}>
            {page.id}-{page.type}
          </Question>
        ))}
    </ContentWrapper>
  );
};

export default Content;
