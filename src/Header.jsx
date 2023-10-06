import React from 'react';
import azionLogo from './assets/img/azion.svg';

function Header() {
  return (
    <div className='header'>
      <img
        src={azionLogo}
        alt='logo Azion'
        width='100'
        height='24'
        className='logo-left'
      />
    </div>
  );
}

export default Header;
