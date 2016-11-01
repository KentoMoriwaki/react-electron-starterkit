import delay from 'delay';
import * as actionTypes from '../utils/actionTypes';
import apiFetch from '../utils/apiFetch';

export const increaseCount = () => ({
  type: actionTypes.COUNT_INCREASED,
});

export const loadCount = () => async dispatch => {
  const res = await apiFetch('/count');
  const json = await res.json();
  dispatch({
    type: actionTypes.COUNT_UPDATED,
    count: json.count,
  });
};

export const saveCount = () => async (dispatch, getStore) => {
  const res = await apiFetch('/count', {
    method: 'PUT',
    body: JSON.stringify({ count: getStore().counter.count }),
  });
  const json = await res.json();
  dispatch({
    type: actionTypes.COUNT_UPDATED,
    count: json.count,
  });
};
