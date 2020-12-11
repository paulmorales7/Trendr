import { GET_ENTRIES, POST_ERROR, ADD_ENTRY } from '../actions/types';

const initialState = {
  entries: [],
  entry: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ENTRIES:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case ADD_ENTRY:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
