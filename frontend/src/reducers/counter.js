import * as actionTypes from '../utils/actionTypes';

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNT_INCREASED:
      return {
        ...state,
        count: state.count + 1,
      };
      break;
    case actionTypes.COUNT_UPDATED:
      return {
        ...state,
        count: action.count,
      };
      break;
    default:
  }
  return state;
};

export default counter;
