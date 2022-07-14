import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGING_FALUIRE,
    LOGIN_VIA_FACEBOOK_REQUEST,
    LOGIN_VIA_FACEBOOK_SUCCESS,
    LOGIN_VIA_FACEBOOK_FALUIRE,
    LOGIN_VIA_GOOGLE_REQUEST,
    LOGIN_VIA_GOOGLE_SUCCESS,
    LOGIN_VIA_GOOGLE_FALUIRE,
} from './types';

export const loginRequest = (data) => ({
    type: LOGIN_REQUEST,
    data,
});

export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    data,
});

export const loginFaluire = (data) => ({
    type: LOGING_FALUIRE,
    data,
});

export const loginViaFacebookRequest = (data) => ({
    type: LOGIN_VIA_FACEBOOK_REQUEST,
    data,
});

export const loginViaFacebookSuccess = (data) => ({
    type: LOGIN_VIA_FACEBOOK_SUCCESS,
    data,
});

export const loginViaFacebookFaluire = (data) => ({
    type: LOGIN_VIA_FACEBOOK_FALUIRE,
    data,
});

export const loginViaGoogleRequest = (data) => ({
    type: LOGIN_VIA_GOOGLE_REQUEST,
    data,
});

export const loginViaGoogleSuccess = (data) => ({
    type: LOGIN_VIA_GOOGLE_SUCCESS,
    data,
});

export const loginViaGoogleFaluire = (data) => ({
    type: LOGIN_VIA_GOOGLE_FALUIRE,
    data,
});