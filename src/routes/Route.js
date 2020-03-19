import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import AppLayout from '../layouts/App';

export default function RouteWrapper({ component: Component, path, ...rest }) {
  const Layout = AppLayout;

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
