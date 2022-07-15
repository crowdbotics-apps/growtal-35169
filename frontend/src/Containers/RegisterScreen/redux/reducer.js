import {
    SIGNUP_REQUEST,
    SIGNUP_REQUEST_SUCCESS,
    SIGNUP_REQUEST_FALUIRE,
} from './types';

const initialState = {
    user: false,
    requesting: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                requesting: true,
            };

        case SIGNUP_REQUEST_SUCCESS:
            return {
                ...state,
                requesting: false,
                user: action.data
            };

        case SIGNUP_REQUEST_FALUIRE:
            return {
                ...state,
                requesting: false,
                err: action.data
            };

        default:
            return state;
    }
};
