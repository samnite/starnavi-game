import { GET_SETTINGS, SET_SETTINGS } from '../types';
import { createReducer } from '../redux';

const initialState = {
  fetchedSettings: [],
  currentSettings: {}
};

export default createReducer(initialState, {
  [GET_SETTINGS]: (state, { payload }) => {
    return {
      ...state,
      fetchedSettings: payload
    };
  },
  [SET_SETTINGS]: (state, { payload }) => {
    return {
      ...state,
      currentSettings: payload
    };
  }
});
