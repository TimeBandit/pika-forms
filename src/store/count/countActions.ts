import State from "../State";

export interface counterState {
  count: number;
}

export const countInitialState: counterState = {
  count: 0,
};

export const countActions = {
  increment: (state: State, payload: any) => ({ count: state.count + 1 }),
  decrement: (state: State, payload: any) => ({ count: state.count - 1 }),
};
