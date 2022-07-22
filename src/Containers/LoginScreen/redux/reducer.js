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

const initialState = {
    user: false,
    requesting: false,
    error: false,
    userType: false,
    notificationData: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                requesting: true,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                requesting: false,
                user: action.data
            };

        case LOGING_FALUIRE:
            return {
                ...state,
                requesting: false,
            };

        case LOGIN_VIA_LINKEDIN_REQUEST:
            return {
                ...state,
                requesting: true,
            };

        case LOGIN_VIA_LINKEDIN_SUCCESS:
            return {
                ...state,
                requesting: false,
                data: action.data
            };

        case LOGIN_VIA_LINKEDIN_FALUIRE:
            return {
                ...state,
                requesting: false,
                data: action.data
            };

        case LOGIN_VIA_GOOGLE_REQUEST:
            return {
                ...state,
                requesting: true,
            };

        case LOGIN_VIA_GOOGLE_SUCCESS:
            return {
                ...state,
                requesting: false,
                data: action.data
            };

        case LOGIN_VIA_GOOGLE_FALUIRE:
            return {
                ...state,
                requesting: false,
                data: action.data
            };

        default:
            return state;
    }
};
