import { all } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import LoginScreen from 'Containers/LoginScreen/redux/saga'
import RegisterScreen from 'Containers/RegisterScreen/redux/saga'

export function* mainSaga() {
  yield all([
    LoginScreen,
    RegisterScreen
  ])
}
