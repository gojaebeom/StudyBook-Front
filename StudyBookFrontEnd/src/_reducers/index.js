import { combineReducers } from "redux";
import loginReducer from "./modules/loginReducer";
import postsReducer from "./modules/postsReducer";
import postDetailReducer from "./modules/postDetailReducer";


const mainReducer = combineReducers({
  loginReducer,
  postsReducer,
  postDetailReducer
});
export default mainReducer;