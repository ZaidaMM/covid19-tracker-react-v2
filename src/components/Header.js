import React from 'react';
import MainNavbar from './MainNavbar';

function Header() {
  return (
    <div className='Header'>
      <div className='hero bg-dark-color p-5'>
        <h1 className='text-white offset-md-1 display-3 text-md-left'>
          Covid-19 Tracker
        </h1>
        <p className='text-light offset-md-1 lead pl-2 d-none d-md-block'>
          Keep safe with reliable information in real time
        </p>
      </div>
      <MainNavbar />
    </div>
  );
}
export default Header;
