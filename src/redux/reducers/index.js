import { combineReducers } from "redux";

// Root
import mainReducer from "../../home/Reducer";

export default combineReducers({
  main: mainReducer,
});
