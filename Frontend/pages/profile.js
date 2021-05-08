import React from "react";
import Head from "next/head";

import AppLayout from "../components/appLayout";
import NicknameEditForm from "../components/nicknameEditForm";
import FollowList from "../components/followList";

const Profile = () => {
  const followingList = [
    { nickname: "필로잉" },
    { nickname: "test" },
    { nickname: "오피셜" },
  ];
  const followerList = [
    { nickname: "팔로워" },
    { nickname: "test" },
    { nickname: "오피셜" },
  ];

  return (
    <>
      <Head>
        <title>내 프로필 | BeMyMacApp</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
