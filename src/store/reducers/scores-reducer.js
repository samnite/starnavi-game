import { SET_COMPUTER_SCORES, SET_PLAYER_NAME, SET_USER_SCORES } from '../types';
import { createReducer } from '../redux';

const initialState = {
  userScores: 0,
  computerScores: 0,
  playerName: ''
};

export default createReducer(initialState, {
  [SET_USER_SCORES]: (state, { payload }) => {
    return {
      ...state,
      userScores: payload
    };
  },
  [SET_COMPUTER_SCORES]: (state, { payload }) => {
    return {
      ...state,
      computerScores: payload
    };
  },
  [SET_PLAYER_NAME]: (state, { payload }) => {
    return {
      ...state,
      playerName: payload
    };
  }
});
