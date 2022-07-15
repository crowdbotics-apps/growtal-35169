/*!

=========================================================
* Paper Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Router, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { store, history } from './Redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import RouteGuard from './RouterGuard'

import AuthLayout from 'layouts/Auth.js'
import AdminLayout from 'layouts/Admin.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'assets/scss/paper-dashboard.scss?v=1.2.0'
import 'assets/demo/demo.css'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path='/auth' render={props => <AuthLayout {...props} />} />
          <Route path='/admin' render={props => <AdminLayout {...props} />} />
          <Redirect to='/admin/dashboard' />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
