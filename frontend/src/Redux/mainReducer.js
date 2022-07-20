import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { connectRouter } from 'connected-react-router'

import LoginScreen from 'Containers/LoginScreen/redux/reducer';
import RegisterScreen from 'Containers/RegisterScreen/redux/reducer'

export const combinedReducers = history => ({
    LoginScreen,
    RegisterScreen
})
