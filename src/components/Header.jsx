import './Header.css';

import logo from '../assets/icons/logo.svg'

import SideMenu from './SideMenu';
import { useState } from 'react';
import { MenuToggle } from './utils/MenuToggle';

function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center pt-6">
      <img src={logo} className='ml-6' alt="logo" />
      <MenuToggle isSideMenuOpen={isSideMenuOpen} toggle={() => setIsSideMenuOpen(!isSideMenuOpen)} />
      <SideMenu isSideMenuOpen={isSideMenuOpen}/>
      <ol className='hidden md:flex gap-x-10 font-barlow text-sm text-white bg-dusty_gray uppercase pr-10'>
        <li>home</li>
        <li>destination</li>
        <li>crew</li>
        <li>technology</li>
      </ol>
    </header>
  );
}

export default Header;
