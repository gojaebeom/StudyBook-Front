import { combineReducers } from "redux";
import loginReducer from "./modules/loginReducer";
import loggedinMenuReducer from "./modules/loggedinMenuReducer";
import postsReducer from "./modules/postsReducer";
import postDetailReducer from "./modules/postDetailReducer";
import postFilterReducer from "./modules/postFilterReducer";
import postCreateReducer from "./modules/postCreateReducer";


const mainReducer = combineReducers({
  loginReducer,
  postsReducer,
  postDetailReducer,
  postFilterReducer,
  loggedinMenuReducer,
  postCreateReducer
});
export default mainReducer;