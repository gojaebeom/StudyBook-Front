import { combineReducers } from "redux";
import loginReducer from "./modules/loginReducer";
import postsReducer from "./modules/postsReducer";
import postDetailReducer from "./modules/postDetailReducer";
import postFilterReducer from "./modules/postFilterReducer";


const mainReducer = combineReducers({
  loginReducer,
  postsReducer,
  postDetailReducer,
  postFilterReducer
});
export default mainReducer;