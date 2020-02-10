import axios from 'axios';
import { GET_SETTINGS, INIT_FIELD, SET_SETTINGS, SET_CELL } from '../types';

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

// Generate game - field
export const initField = size => dispatch => {
  const field = [];
  for (let i = 1; i <= size; i++) {
    field.push({ id: i, status: 0 });
  }
  dispatch({
    type: INIT_FIELD,
    payload: field
  });
};

// Change Cell status [0-empty, 1-blue, 2-green, 3-red]
export const changeCell = (field, id, status) => dispatch => {
  const newField = [...field];
  const replaceObj = {
    id,
    status
  };
  const idx = newField.findIndex(el => el.id === id);
  newField[idx] = replaceObj;
  dispatch({
    type: SET_CELL,
    payload: newField
  });
};
