import State from "../State";

export interface surveyState {
  currentId: number;
  survey: {
    pages?: any[] | undefined;
    title?: string | undefined;
  };
  results: { [key: number]: { id: number; question: string; answer: string } };
}

export const surveryInitialState: surveyState = {
  currentId: 1,
  survey: {},
  results: {},
};

export const surveyActions = {
  LOAD_SURVEY: (state: State, payload: any) => ({ survey: payload }),
};
