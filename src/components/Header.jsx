import './Header.css';

import logo from '../assets/icons/logo.svg'

import SideMenu from './SideMenu';
import { useState } from 'react';
import { MenuToggle } from './utils/MenuToggle';

function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center">
      <img src={logo} className='ml-6 mt-6' alt="logo" />
      <MenuToggle isSideMenuOpen={isSideMenuOpen} toggle={() => setIsSideMenuOpen(!isSideMenuOpen)} />
      <SideMenu isSideMenuOpen={isSideMenuOpen}/>
      <ol className='flex gap-x-10 text-white uppercase'>
        <li>home</li>
        <li>destination</li>
        <li>crew</li>
        <li>technology</li>
      </ol>
    </header>
  );
}

export default Header;
