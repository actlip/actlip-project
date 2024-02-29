import { combineReducers } from "redux";
import auth from "./authReducer";
import alert from "./alertReducer";

import status from "./statusReducer";
import homePosts from "./postReducer";
import modal from "./modalReducer";
import detailPost from "./detailPostReducer";

export default combineReducers({
  auth,
  alert,

  status,
  homePosts,
  modal,
  detailPost,
});
