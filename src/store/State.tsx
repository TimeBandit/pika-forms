import { counterState } from "./count/countActions";
import { userState } from "./user/userActions";
import { surveyState } from "./survey/surveyActions";

// combine initial states
export default interface State extends counterState, userState, surveyState {}
