import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'

const RouteGuard = ({
  isProtected = false,
  // accessToken,
  component: Component,
  ...rest
}) => {
  const accessToken = sessionStorage.getItem('authToken')
  console.log('accessToken..................................', accessToken);
  return (
    <Route
      {...rest}
      render={props => {
        if (isProtected) {
          return accessToken ? (
            // <Redirect to={{ pathname: '/admin/dashboard' }} />
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: '/auth/welcome' }} />
          )
        } else {
          return accessToken ? (
            <Redirect
              to={{
                pathname: '/'
              }}
            />
          ) : (
            <Component {...props} />
          )
        }
      }}
    />
  )
}

const mapStateToProps = state => ({
  // accessToken: state.signIn.accessToken
  // userDetails: state.signIn.userDetails,
  // timerRef: state.flightSearch.timerRef
})

// const mapStateToProps = createStructuredSelector({
//     user: makeSelectUser(),
// });

const withConnect = connect(mapStateToProps)

export default compose(withConnect)(RouteGuard)
