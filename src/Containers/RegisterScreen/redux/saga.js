import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from "connected-react-router";
import toast from 'react-hot-toast';
// import AsyncStorage from '@react-native-community/async-storage';

// import { showMessage } from 'react-native-flash-message';

// config
import { BASE_URL } from '../../../config/app';

// utils
import XHR from '../../../utils/XHR';

// types
import {
    SIGNUP_REQUEST,
} from './types';

// actions
import {
    registerSuccess,
    registerFaluire,
    // loginViaFacebookSuccess,
    // loginViaFacebookFaluire,
    // loginViaGoogleSuccess,
    // loginViaGoogleFaluire,
} from './actions';

function signUpAPI(data) {
    const URL = `${BASE_URL}/api/v1/signup/`;
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

function* signUp({ data }) {
    try {
        const response = yield call(signUpAPI, data);
        toast.success(`Register Successfully`);
        yield put(
            push({
                pathname: '/auth/login'
            })
        )
        // sessionStorage.setItem('authToken', response?.data?.token);
        // sessionStorage.setItem('user', response?.data?.user.id.toString());
        // yield put(loginSuccess(response?.data?.user));
    } catch (e) {
        const { response } = e
        // yield put(loginFaluire(response));
    }
}

// function loginViaFacebookAPI(data) {
//     const URL = `${BASE_URL}/api/v1/facebook/login/`;
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

// function* loginViaFacebook({ data }) {
//     try {
//         const response = yield call(loginViaFacebookAPI, data);
//         console.log('facebook success: ', response);
//         // sessionStorage.setItem('authToken', response?.data?.token);

//         // yield put(loginViaFacebookSuccess(response));
//     } catch (e) {
//         const { response } = e
//         console.log('facebook error: ', response);
//         // yield put(loginViaFacebookFaluire(response));

//     }
// }

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
    takeLatest(SIGNUP_REQUEST, signUp),
    // takeLatest(LOGIN_VIA_FACEBOOK_REQUEST, loginViaFacebook),
    // takeLatest(LOGIN_VIA_GOOGLE_REQUEST, loginViaGoogle),
]);
