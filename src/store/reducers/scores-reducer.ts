import {
  GET_LEADERS,
  SET_COMPUTER_SCORES,
  SET_PLAYER_NAME,
  SET_RESET_SCORES,
  SET_USER_SCORES,
  SET_WINNER
} from '../types';
import { createReducer } from '../redux';

export interface Winner {
  winner: string;
  date: string;
  id?: number
}


export interface ScoresStateTypes {
  userScores: number;
  computerScores: number;
  playerName: string;
  winner: null | Winner;
  leaders: Winner[];
}

const initialState = {
  userScores: 0,
  computerScores: 0,
  playerName: '',
  winner: null,
  leaders: []
};

export default createReducer(initialState, {
  [SET_USER_SCORES]: (state: ScoresStateTypes, { payload }: any) => {
    return {
      ...state,
      userScores: payload
    };
  },
  [SET_COMPUTER_SCORES]: (state: ScoresStateTypes, { payload }: any) => {
    return {
      ...state,
      computerScores: payload
    };
  },
  [SET_PLAYER_NAME]: (state: ScoresStateTypes, { payload }: any) => {
    return {
      ...state,
      playerName: payload
    };
  },
  [SET_WINNER]: (state: ScoresStateTypes, { payload }: any) => {
    return {
      ...state,
      winner: payload
    };
  },
  [SET_RESET_SCORES]: (state: ScoresStateTypes) => {
    return {
      ...state,
      winner: null,
      userScores: 0,
      computerScores: 0
    };
  },
  [GET_LEADERS]: (state: ScoresStateTypes, { payload }: any) => {
    return {
      ...state,
      leaders: payload
    };
  }
});
