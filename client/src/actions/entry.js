// CORRELATING CLIENT-SIDE ACTIONS: ENTRIES (Saved Searches)

import api from '../utils/api';
import { setAlert } from './alert';
import { GET_ENTRIES, POST_ERROR, ADD_ENTRY } from './types';

// Fetching Entries
export const getEntries = () => async (dispatch) => {
  try {
    const res = await api.get('/entries');

    dispatch({
      type: GET_ENTRIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Entry
export const addEntry = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/entries', formData);

    dispatch({
      type: ADD_ENTRY,
      payload: res.data,
    });

    dispatch(setAlert('Search Saved!', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
