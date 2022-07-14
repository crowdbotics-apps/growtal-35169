import { all } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import LoginScreen from 'Containers/LoginScreen/redux/saga'

export function* mainSaga() {
  yield all([
    LoginScreen
  ])
}
