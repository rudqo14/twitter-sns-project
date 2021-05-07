import React from "react";
import Head from "next/head";
import { Form } from "antd ";

import AppLayout from "/components/AppLayout";

const Signup = () => {
  const onFinish = useCallback(())

  return (
    <AppLayout>
      <Head>
        <title>회원가입 | BeMyMacApp</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input name="user-nick" value={nick} required onChange={onChangeNick} />
        </div>
        <div>
          <label htmlFor="user-password">패스워드</label>
          <br />
          <Input name="user-password" value={password} required onChange={onChangePassword} />
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
