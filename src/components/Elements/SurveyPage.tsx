import React from "react";
import styled from "styled-components";

import { Page } from "../../store/survey/surveyActions";
import PageElementFactory from "../Factories/PageElementFactory";

const PageWrapper = styled.li`
  height: 101vh;
`;

interface PageProps {
  page: Page;
}
const SurveyPage = ({ page }: PageProps) => {
  const id = page.id.toString();

  return (
    <PageWrapper id={id}>
      {page.layout.map((desc, index) => (
        <PageElementFactory key={index} id={id} props={desc} />
      ))}
    </PageWrapper>
  );
};

export default SurveyPage;
