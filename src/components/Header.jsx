import './Header.css';

import logo from '../assets/icons/logo.svg'

import SideMenu from './SideMenu';
import { useState } from 'react';
import { MenuToggle } from './utils/MenuToggle';

function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between">
      <img src={logo} className='ml-6 mt-6 self-center' alt="logo" />
      <MenuToggle isSideMenuOpen={isSideMenuOpen} toggle={() => setIsSideMenuOpen(!isSideMenuOpen)} />
      <SideMenu isSideMenuOpen={isSideMenuOpen}/>
      <ol className='hidden md:flex gap-x-10 font-barlow text-sm text-white bg-dusty_gray/[.04] tracking-widest uppercase px-10 py-8'>
        <li>home</li>
        <li>destination</li>
        <li>crew</li>
        <li>technology</li>
      </ol>
    </header>
  );
}

export default Header;
