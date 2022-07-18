import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from "connected-react-router";
// import AsyncStorage from '@react-native-community/async-storage';

// import { showMessage } from 'react-native-flash-message';
// import toast from "react-hot-toast"

import toast from 'react-hot-toast';
// config
import { BASE_URL } from '../../../config/app';

// utils
import XHR from '../../../utils/XHR';

// types
import {
    LOGIN_REQUEST,
    LOGIN_VIA_FACEBOOK_REQUEST,
    LOGIN_VIA_GOOGLE_REQUEST
} from './types';

// actions
import {
    loginSuccess,
    loginFaluire,
    loginViaFacebookSuccess,
    loginViaFacebookFaluire,
    loginViaGoogleSuccess,
    loginViaGoogleFaluire,
} from './actions';

function loginAPI(data) {
    const URL = `${BASE_URL}/api/v1/login/`;
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

function* login({ data }) {
    console.log('saga data', data);
    try {
        const response = yield call(loginAPI, data);
        console.log('login success....', response);
        toast.success(`Login Successfully`);
        sessionStorage.setItem('authToken', response?.data?.token);
        sessionStorage.setItem('user', response?.data?.user?.id.toString());
        yield put(loginSuccess(response?.data?.user));
        yield put(
            push({
                pathname: '/admin/dashboard'
            })
        )
    } catch (e) {
        const { response } = e
        console.log('login failure....', response);
        toast.error(`${response?.data?.approval_error[0]}`);
        // yield put(loginFaluire(response));
    }
}

function loginViaFacebookAPI(data) {
    const URL = `${BASE_URL}/api/v1/login/facebook/`;
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

function* loginViaFacebook({ data }) {
    console.log('facebook saga data...', data);
    try {
        const response = yield call(loginViaFacebookAPI, data);
        console.log('facebook success: ', response);
        // sessionStorage.setItem('authToken', response?.data?.token);

        // yield put(loginViaFacebookSuccess(response));
    } catch (e) {
        const { response } = e
        console.log('facebook error: ', response);
        // yield put(loginViaFacebookFaluire(response));

    }
}

// function loginViaGoogleAPI(data) {
//     const URL = `${BASE_URL}/api/v1/google/login/`;
//     const options = {
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         method: 'POST',
//         data,
//     };

//     return XHR(URL, options);
// }

// function* loginViaGoogle({ data }) {
//     try {
//         const response = yield call(loginViaGoogleAPI, data);
//         console.log('Google success: ', response);
//         // sessionStorage.setItem('authToken', response?.data?.key);
//     } catch (e) {
//         const { response } = e
//         console.log('Google error: ', response);
//         // yield put(loginViaGoogleFaluire(e));
//     }
// }

export default all([
    takeLatest(LOGIN_REQUEST, login),
    takeLatest(LOGIN_VIA_FACEBOOK_REQUEST, loginViaFacebook),
    // takeLatest(LOGIN_VIA_GOOGLE_REQUEST, loginViaGoogle),
]);
