import { combineReducers } from "redux";

import auth from "./auth";
import vendor from "./vendor";

/**
 *  @description: Combines all reducers.
 */
export default combineReducers({ auth, vendor });
