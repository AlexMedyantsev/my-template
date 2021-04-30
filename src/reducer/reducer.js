import {reducer as reducerCondition} from "./condition/condition.js";
import NameSpace from "./name-space.js";
import {combineReducers} from "redux";

export default combineReducers({
  [NameSpace.CONDITION]: reducerCondition,
});
