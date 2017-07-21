import * as types from '../actions/types';

const initialState = {
  question: [],
  loading: false
};

function QuestionsReducer (prevState = initialState, action) {
  if (!action) return prevState;

  if (action.type === types.FETCH_QUESTIONS_REQUEST) {
    const newState = Object.assign({}, prevState);
    newState.loading = true;
    return newState;
  }

  if (action.type === types.FETCH_QUESTIONS_SUCCESS) {
    const newState = Object.assign({}, prevState);
    newState.topics = action.payload;
    return newState;
  }

  if (action.type === types.FETCH_QUESTIONS_ERROR) {
    const newState = Object.assign({}, prevState);
    newState.error = action.payload;
    newState.loading = false;

    return newState;
  }

  return prevState;
}

export default QuestionsReducer;