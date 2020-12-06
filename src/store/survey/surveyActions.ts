import State from "../State";

export type PageType =
  | "info"
  | "multiple-choice-question"
  | "single-choice-question"
  | "text-input-question";

export type PageElementType =
  | "blockquote"
  | "image"
  | "next-button"
  | "options"
  | "paragraph"
  | "secondary"
  | "submit";

export interface Page {
  type: PageType;
  id: number;
  layout: {
    type: PageElementType;
  }[];
}

export interface surveyState {
  currentId: number;
  survey: {
    pages?: Page[];
    title?: string;
  };
  results: { [key: number]: { id: number; question: string; answer: string } };
}

export const surveryInitialState: surveyState = {
  currentId: 1,
  survey: {},
  results: {},
};

export const surveyActions = {
  SURVEY_LOAD: (state: State, payload: any) => ({ survey: payload }),
  SURVEY_PAGE_DOWN: (state: State, payload: any) => {
    const { currentId } = state;
    const numberOfQuestions = state.survey.pages?.length;
    if (currentId === numberOfQuestions) return;

    return { ...state, ...{ currentId: currentId + 1 } };
  },
  SURVEY_PAGE_UP: (state: State, payload: any) => {
    const { currentId } = state;
    if (currentId === 1) return;

    return { ...state, ...{ currentId: currentId - 1 } };
  },
};
