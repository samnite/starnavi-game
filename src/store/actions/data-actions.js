import axios from 'axios';
import { GET_SETTINGS, SET_SETTINGS } from '../types';

axios.defaults.baseURL = 'https://starnavi-frontend-test-task.herokuapp.com/';

// Fetch settings from server
export const getSettings = () => dispatch => {
  axios
    .get('/game-settings')
    .then(res => {
      const result = Object.keys(res.data).map(key => {
        return { [key]: res.data[key] };
      });
      dispatch({
        type: GET_SETTINGS,
        payload: result
      });
    })
    .catch(err => {
      console.log(err.message);
    });
};

// Set user difficulty settings
export const setSettings = settings => dispatch => {
  dispatch({
    type: SET_SETTINGS,
    payload: settings
  });
};
