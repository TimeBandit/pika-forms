// store/useStore.js
// original code can be found here: https://dev.to/ramsay/build-a-redux-like-global-store-using-react-hooks-4a7n
import React, { Dispatch, ReactNode, useContext, useReducer } from "react";

import { countActions, countInitialState } from "./count/countActions";
import State from "./State";
import { surveryInitialState, surveyActions } from "./survey/surveyActions";
import { userActions, userInitialState } from "./user/userActions";

// create context
interface Context {
  state: State;
  dispatch: Dispatch<Action>;
}
const initialState: State = {
  ...countInitialState,
  ...userInitialState,
  ...surveryInitialState,
};
const StoreContext = React.createContext({ state: initialState } as Context);

// combine actions
const Actions = {
  ...userActions,
  ...countActions,
  ...surveyActions,
};

type Action = { type: keyof typeof Actions; payload: any };
// create the reducer
const reducer = (state: State, action: Action): State => {
  const act = Actions[action.type];
  const update = act(state, action.payload);
  return { ...state, ...update };
};

// create the provider that uses our context
interface ProviderProps {
  children: ReactNode;
}
export const StoreProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};

// useStore will be used in React components to fetch and mutate state
// this is a hook that wraps useContext
export const useStore = () => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};
