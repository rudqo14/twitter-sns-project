import React from 'react';
import './nav.scss';

type MainProps = {};

const Nav = ({}: MainProps) => {
  return (
    <nav className='navBar'>
      <div className='navContainer'>
        <div className='navLogoContainer'>
          <img src='./Public/Images/logo_disquiet.8e484ca2.svg' alt='logo' />
        </div>
        <div className='navMenuContainer'>
          <p>사이트소개</p>
          <p>커뮤니티</p>
          <p>블로그</p>
          <p>Mac-App공유하기</p>
          <div className='profileImgContainer'></div>
        </div>
      </div>
    </nav>
  );
};

Nav.defaultProps = {};

export default Nav;
