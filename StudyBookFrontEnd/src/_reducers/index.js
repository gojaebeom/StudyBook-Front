import { combineReducers } from "redux";
import loginReducer from "./modules/loginReducer";
import loggedinMenuReducer from "./modules/loggedinMenuReducer";
import postsReducer from "./modules/postsReducer";
import postDetailReducer from "./modules/postDetailReducer";
import postFilterReducer from "./modules/postFilterReducer";


const mainReducer = combineReducers({
  loginReducer,
  postsReducer,
  postDetailReducer,
  postFilterReducer,
  loggedinMenuReducer
});
export default mainReducer;