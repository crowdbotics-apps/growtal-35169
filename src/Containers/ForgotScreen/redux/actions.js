import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FALUIRE,
    CHANGE_PASSWORD_REQUEST
} from './types';

export const forgotRequest = (data) => ({
    type: FORGOT_PASSWORD_REQUEST,
    data,
});

export const forgotSuccess = (data) => ({
    type: FORGOT_PASSWORD_SUCCESS,
    data,
});

export const forgotFaluire = (data) => ({
    type: FORGOT_PASSWORD_FALUIRE,
    data,
});

export const changeNewPassword = (data) => ({
    type: CHANGE_PASSWORD_REQUEST,
    data,
});