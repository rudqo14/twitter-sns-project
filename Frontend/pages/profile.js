import React from "react";
import Head from "next/head";
import { useSelector } from "react-redux";

import AppLayout from "../components/appLayout";
import NicknameEditForm from "../components/nicknameEditForm";
import FollowList from "../components/followList";

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <>
      <Head>
        <title>내 프로필 | BeMyMacApp</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={me.Followings} />
        <FollowList header="팔로워 목록" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
