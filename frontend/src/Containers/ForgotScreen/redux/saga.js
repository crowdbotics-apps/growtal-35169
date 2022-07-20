import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from "connected-react-router";

import toast from 'react-hot-toast';
// config
import { BASE_URL } from '../../../config/app';

// utils
import XHR from '../../../utils/XHR';

// types
import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FALUIRE,
    CHANGE_PASSWORD_REQUEST
} from './types';

// actions
import {

} from './actions';

function forgotPasswordAPI(data) {
    const URL = `${BASE_URL}/api/v1/password/reset/`;
    const options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        data,
    };

    return XHR(URL, options);
}

function* forgotPassword({ data }) {
    console.log('saga data', data);
    try {
        const response = yield call(forgotPasswordAPI, data);
        console.log('forgotPassword success....', response);
        toast.success(`ForgotPassword Successfully`);
        // sessionStorage.setItem('authToken', response?.data?.token);
        // sessionStorage.setItem('user', response?.data?.user?.id.toString());
        // yield put(loginSuccess(response?.data?.user));
        // yield put(
        //     push({
        //         pathname: '/auth/change-password'
        //     })
        // )
    } catch (e) {
        const { response } = e
        console.log('forgotPassword failure....', response);
        toast.error(`${response?.data?.approval_error[0]}`);
        // yield put(loginFaluire(response));
    }
}

function newPasswordAPI(data) {
    const URL = `${BASE_URL}/api/v1/password/reset/confirm/`;
    const options = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        data,
    };

    return XHR(URL, options);
}

function* newPassword({ data }) {
    console.log('saga data', data);
    try {
        const response = yield call(newPasswordAPI, data);
        console.log('newPassword success....', response);
        toast.success(`newPassword Successfully`);
        // sessionStorage.setItem('authToken', response?.data?.token);
        // sessionStorage.setItem('user', response?.data?.user?.id.toString());
        // yield put(loginSuccess(response?.data?.user));
        yield put(
            push({
                pathname: '/auth/change-password'
            })
        )
    } catch (e) {
        const { response } = e
        console.log('newPassword failure....', response);
        toast.error(`${response?.data?.approval_error[0]}`);
        // yield put(loginFaluire(response));
    }
}

export default all([
    takeLatest(FORGOT_PASSWORD_REQUEST, forgotPassword),
    takeLatest(CHANGE_PASSWORD_REQUEST, newPassword),
]);
