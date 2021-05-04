import React from "react";
import Link from "next/link";
import { Menu } from "antd";

const AppLayout = ({ children }: AppLayout) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>Be my mac app</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

interface AppLayout {
  children: React.ReactNode;
}

export default AppLayout;
