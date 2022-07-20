import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGING_FALUIRE,
    LOGIN_VIA_LINKEDIN_REQUEST,
    LOGIN_VIA_LINKEDIN_SUCCESS,
    LOGIN_VIA_LINKEDIN_FALUIRE,
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

export const loginViaLinkedInRequest = (data) => ({
    type: LOGIN_VIA_LINKEDIN_REQUEST,
    data,
});

export const loginViaLinkedInSuccess = (data) => ({
    type: LOGIN_VIA_LINKEDIN_SUCCESS,
    data,
});

export const loginViaLinkedInFaluire = (data) => ({
    type: LOGIN_VIA_LINKEDIN_FALUIRE,
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