import { GLOBALTYPES } from "../actions/globalTypes";

const initialStore = {};

const authReducer = (state = initialStore, action) => {
  switch (action.type) {
    case GLOBALTYPES.AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
