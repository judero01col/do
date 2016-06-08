import * as types from '../constants/actionTypes';

export default function progressBarReducer(state = 0, action) {
  if (action.type === types.PROGRESSBAR_SET_VALUE) {
    return action.payload.value;
  }
  return state;
}
