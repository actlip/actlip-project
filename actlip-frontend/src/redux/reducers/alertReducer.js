import { GLOBALTYPES } from "../actions/globalTypes";

const initialStore = {};

const alertReducer = (state = initialStore, action) => {
  switch (action.type) {
    case GLOBALTYPES.ALERT:
      return action.payload;
    default:
      return state;
  }
};

export default alertReducer;
