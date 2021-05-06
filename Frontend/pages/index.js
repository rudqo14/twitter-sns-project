import React from "react";
import Head from "next/head";

import AppLayout from "../components/appLayout";

const Main = () => {
  return (
    <>
      <Head>
        <title>BeMyMacApp</title>
      </Head>
      <AppLayout>메인 페이지</AppLayout>
    </>
  );
};

export default Main;