import React from 'react';

import {
  Route,
  Redirect
} from "react-router-dom";

import {connect} from 'react-redux';  


function PrivateRoute({ children, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const stateToProps = ({isLoggedIn}) => ({isLoggedIn})

export default connect(stateToProps)(PrivateRoute);