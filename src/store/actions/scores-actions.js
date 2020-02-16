import axios from 'axios';
import {
  GET_LEADERS,
  GET_SETTINGS,
  SET_COMPUTER_SCORES,
  SET_PLAYER_NAME,
  SET_USER_SCORES
} from '../types';

axios.defaults.baseURL = 'https://starnavi-frontend-test-task.herokuapp.com';

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
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};
