import delay from 'delay';
import * as actionTypes from '../utils/actionTypes';

export const increaseCount = () => ({
  type: actionTypes.COUNT_INCREASED,
});

export const increaseCountWithDelay = () => async dispatch => {
  await delay(1000);
  dispatch(increaseCount());
}

export const resetCount = () => ({
  type: actionTypes.COUNT_UPDATED,
  count: 0,
});
