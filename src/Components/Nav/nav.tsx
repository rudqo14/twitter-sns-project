import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

type NavProps = {};

const Nav = () => {
  return (
    <nav className='navBar'>
      <div className='navContainer'>
        <div className='navLogoContainer'>
          <img src='./Public/Images/logo_disquiet.8e484ca2.svg' alt='logo' />
        </div>
        <div className='navMenuContainer'>
          <Link to='/'>사이트소개</Link>
          <Link to='/'>커뮤니티</Link>
          <Link to='/'>블로그</Link>
          <div className='border' />
          <Link to='/'>App 공유하기</Link>
          <div className='border' />
          <div className='profileImgContainer'>
            <img src='./Public/Images/profileImg.png' alt='profileImg' />
          </div>
        </div>
      </div>
    </nav>
  );
};

Nav.defaultProps = {};

export default Nav;
