import { combineReducers } from "redux";
import countReducer from "./countReducer";
import contactListReducer from "./contactListReducer";

export default combineReducers({
  countReducer,
  contactListReducer
});
