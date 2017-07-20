import * as types from './Types';
import axios from 'axios';
import {ROOT} from '../../config';

export function fetchQuestions (level) {
    const path = level !== undefined ? `levels/${level}/questions` : 'questions';
    return function (dispatch) {
        dispatch(fetchQuestionsRequest());
        axios.get(`${ROOT}/${path}`)
        .then(res => {
            dispatch(fetchQuestionsSuccess(res.data.questions));
        })
        .catch(err => {
            dispatch(fetchQuestionsError(err));
        });
    };
}

export function fetchQuestionsRequest () {
    return {
        type: types.FETCH_QUESTIONS_REQUEST
    };
}

export function fetchQuestionsSuccess (questions) {
    return {
        type: types.FETCH_QUESTIONS_SUCCESS,
        payload: questions
    };
}

export function fetchQuestionsError (error) {
    return {
        type: types.FETCH_QUESTIONS_ERROR,
        payload: error
    };
}