import axios from 'axios';
import {
  GET_LEADERS,
  GET_SETTINGS,
  SET_COMPUTER_SCORES,
  SET_PLAYER_NAME,
  SET_USER_SCORES
} from '../types';

export const setUserScores = () => (dispatch, getState) => {
  const scores = getState().scores.userScores;
  dispatch({
    type: SET_USER_SCORES,
    payload: scores + 1
  });
};

export const setComputerScores = () => (dispatch, getState) => {
  const scores = getState().scores.computerScores;
  dispatch({
    type: SET_COMPUTER_SCORES,
    payload: scores + 1
  });
};

export const setPlayerName = name => dispatch => {
  dispatch({
    type: SET_PLAYER_NAME,
    payload: name
  });
};

// Fetch leaders from server
export const getLeaders = () => dispatch => {
  axios
    .get('/winners')
    .then(res => {
      dispatch({
        type: GET_LEADERS,
        payload: res.data.reverse()
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

// Send winner result to server
export const sendResult = () => (dispatch, getState) => {
  const winner = { ...getState().scores.winner };
  axios
    .post('/winners', winner)
    .then(res => {
      dispatch({
        type: GET_LEADERS,
        payload: res.data.reverse()
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};
