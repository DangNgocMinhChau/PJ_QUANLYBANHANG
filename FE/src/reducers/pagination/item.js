import * as Types from "../../constants/ActionType";
var initialState = {};

const item = (state = initialState, action) => {
  var { value } = action;
  switch (action.type) {
    case Types.PAGE_PAGINATION:
      state = value;
      return state;
    default:
      return state;
  }
};

export default item;
