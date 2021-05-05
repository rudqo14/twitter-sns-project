import React from "react";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";

// const AppLayout = ({ children }: AppLayout) => {
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
          <Input.Search style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          왼쪽 메뉴
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="/" target="_blank" rel="noreferrer">
            오른쪽 메뉴
          </a>
        </Col>
      </Row>
      {children}
    </div>
  );
};

interface AppLayout {
  children: React.ReactNode;
}

export default AppLayout;
