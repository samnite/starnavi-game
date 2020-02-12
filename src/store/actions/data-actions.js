import axios from 'axios';
import {
  GET_SETTINGS,
  INIT_FIELD,
  SET_SETTINGS,
  SET_CELL,
  SET_CURRENT_CELL,
  SET_RED_CELL
} from '../types';

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

// export const setCurrent = cell => dispatch => {
//   console.log(cell);
//   dispatch({
//     type: SET_CURRENT_CELL,
//     payload: cell
//   });
// };

// Change Cell status [0-empty, 1-blue, 2-green, 3-red]
export const changeCell = (id, status) => (dispatch, getState) => {
  const field = [...getState().data.field];
  const replaceCell = {
    id,
    status
  };
  const idx = field.findIndex(el => el.id === id);
  field[idx] = replaceCell;
  dispatch({
    type: SET_CURRENT_CELL,
    payload: replaceCell
  });
  dispatch({
    type: SET_CELL,
    payload: field
  });
};

// export const setRed = (field, id, status) => (dispatch, getState) => {
//   const newField = [...field];
//   const replaceObj = {
//     id,
//     status
//   };
//   const idx = newField.findIndex(el => el.id === id);
//   newField[idx] = replaceObj;
//   dispatch({
//     type: SET_RED_CELL,
//     payload: newField
//   });
// };
