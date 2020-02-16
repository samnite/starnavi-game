import {
  SET_COMPUTER_SCORES,
  SET_PLAYER_NAME,
  SET_RESET_SCORES,
  SET_USER_SCORES,
  SET_WINNER
} from '../types';
import { createReducer } from '../redux';

const initialState = {
  userScores: 0,
  computerScores: 0,
  playerName: '',
  winner: null
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
  },
  [SET_WINNER]: (state, { payload }) => {
    return {
      ...state,
      winner: payload
    };
  },
  [SET_RESET_SCORES]: state => {
    return {
      ...state,
      winner: null,
      userScores: 0,
      computerScores: 0
    };
  }
});
