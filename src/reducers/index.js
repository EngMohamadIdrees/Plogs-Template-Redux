import { combineReducers } from "redux";
import postsReducers from "./postsReducers";
import userReducers from "./userReducers";
export default combineReducers({
  posts: postsReducers,
  users: userReducers,
});
