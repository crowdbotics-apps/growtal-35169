import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FALUIRE,
    CHANGE_PASSWORD_REQUEST
} from './types';

const initialState = {
    requesting: false,
    forgotdata: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                requesting: true,
            };

        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                requesting: false,
                forgotdata: action.data
            };

        case FORGOT_PASSWORD_FALUIRE:
            return {
                ...state,
                requesting: false,
            };

        case CHANGE_PASSWORD_REQUEST:
            return {
                ...state,
                requesting: true,
            };

        default:
            return state;
    }
};
