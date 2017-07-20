import * as types from './Types';
import axios from 'axios';
import {ROOT} from '../../config';

export function fetchUsers (user) {
    const path = user !== undefined ? `users/${user}` : 'users';
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios.get(`${ROOT}/${path}`)
        .then(res => {
            dispatch(fetchUsersSuccess(res.data.users));
        })
        .catch(err => {
            dispatch(fetchUsersError(err));
        });
    };
}

export function fetchUsersRequest () {
    return {
        type: types.FETCH_USERS_REQUEST
    };
}

export function fetchUsersSuccess (users) {
    return {
        type: types.FETCH_USERS_SUCCESS,
        payload: users
    };
}

export function fetchUsersError (error) {
    return {
        type: types.FETCH_USERS_ERROR,
        payload: error
    };
}