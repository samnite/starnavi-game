import axios from 'axios';
import { GET_SETTINGS } from '../types';

axios.defaults.baseURL = 'https://starnavi-frontend-test-task.herokuapp.com/';

// export const getProject = project_name => dispatch => {
//   axios
//     .get(`/project/${project_name}`)
//     .then(res => {
//       dispatch({
//         type: GET_PROJECT,
//         payload: res.data
//       });
//     })
//     .catch(({ response }) => {
//       dispatch({
//         type: SET_ALERT,
//         payload: response.data.error
//       });
//     });
// };
