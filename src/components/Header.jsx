import './Header.css';

import logo from '../assets/icons/logo.svg'
import hamburguer from '../assets/icons/icon-hamburger.svg'

import Menu from './Menu';
import { useEffect, useState } from 'react';
import { MenuToggle } from './utils/MenuToggle';

function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center p-10">
      <img src={logo} alt="logo" />
      {/* <img src={hamburguer} className={`z-40 ${isSideMenuOpen ? 'active' : ''}`} alt="hamburguer" /> */}
      <MenuToggle isSideMenuOpen={isSideMenuOpen} toggle={() => setIsSideMenuOpen(!isSideMenuOpen)} />
      <Menu isSideMenuOpen={isSideMenuOpen}/>
    </header>
  );
}

export default Header;
