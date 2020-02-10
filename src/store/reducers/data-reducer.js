import { GET_SETTINGS } from '../types';
import { createReducer } from '../redux';

const initialState = {
  project: null,
  projects: null,
  alert: null,
  isMain: true
};

export default createReducer(initialState, {
  [GET_SETTINGS]: (state, { payload }) => {
    return {
      ...state,
      project: payload,
      alert: null
    };
  }
});
