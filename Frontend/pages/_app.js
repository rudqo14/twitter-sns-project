import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import withReduxSaga from "next-redux-saga";
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>SNS App</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(App));
