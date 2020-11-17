import State from "../State";

export interface userState {
  user: {
    loggedIn: boolean;
  };
}

// store/userActions.js

export const userInitialState: userState = {
  user: {
    loggedIn: false,
  },
};

export const userActions = {
  login: (state: State, payload: any) => {
    return { user: { loggedIn: true } };
  },
  logout: (state: State, payload: any) => {
    return { user: { loggedIn: false } };
  },
};
