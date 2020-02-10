import { GET_SETTINGS, INIT_FIELD, SET_CELL, SET_SETTINGS } from '../types';
import { createReducer } from '../redux';

const initialState = {
  fetchedSettings: [],
  currentSettings: {},
  field: []
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
  },
  [INIT_FIELD]: (state, { payload }) => {
    return {
      ...state,
      field: payload
    };
  },
  [SET_CELL]: (state, { payload }) => {
    return {
      ...state,
      field: payload
    };
  }
});
