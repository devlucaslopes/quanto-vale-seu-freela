import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import AppLayout from '../layouts/App';
import AuthLayout from '../layouts/Auth';

export default function RouteWrapper({ component: Component, path, ...rest }) {
  let Layout = AppLayout;

  const signed = useSelector(state => state.auth.signed);

  if (path === '/sign-in') Layout = AuthLayout;

  return (
    <Route
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.node.isRequired,
  rest: PropTypes.element.isRequired,
};
