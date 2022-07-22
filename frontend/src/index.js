import React from "react"
import ReactDOM from "react-dom"
import { Switch, Route, Router, Redirect } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"
import { store, history } from "./Redux/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import RouteGuard from "./RouterGuard"

import AuthLayout from "layouts/Auth.js"
import AdminLayout from "layouts/Admin.js"
import BusinessLayout from "layouts/Business.js"

import "bootstrap/dist/css/bootstrap.css"
import "assets/scss/paper-dashboard.scss?v=1.2.0"
import "assets/demo/demo.css"
import "perfect-scrollbar/css/perfect-scrollbar.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <RouteGuard
            path="/auth"
            component={props => <AuthLayout {...props} />}
          />
          <RouteGuard
            path="/admin"
            component={props => <AdminLayout {...props} />}
            isProtected
          />
          <RouteGuard
            path="/business"
            component={props => <BusinessLayout {...props} />}
            isProtected
          />
          <Redirect to="/business/engagement_history" />

          <Redirect to="/admin/time_tracker" />
        </Switch>
        {/* <Switch>
          <Roou path='/auth' render={props => <AuthLayout {...props} />} />
          <Route path='/admin' render={props => <AdminLayout {...props} />} />
          <Redirect to='/auth/welcome' />
        </Switch> */}
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
