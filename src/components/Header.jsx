import './Header.css';

import logo from '../assets/icons/logo.svg'

import SideMenu from './SideMenu';
import CustomLink from './utils/CustomLink';
import { useState } from 'react';
import { MenuToggle } from './utils/MenuToggle';

function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between">
      <img src={logo} className='ml-6 mt-6 md:ml-10 md:mt-0 self-center' alt="logo" />
      <MenuToggle isSideMenuOpen={isSideMenuOpen} toggle={() => setIsSideMenuOpen(!isSideMenuOpen)} />
      <SideMenu isSideMenuOpen={isSideMenuOpen}/>
      <div className='hidden relative lg:w-8/12 md:flex bg-dusty_gray/[.04]'>
        <hr className='hidden lg:block absolute w-11/12 border-dusty_gray top-1/2 -left-96'/>
        <ol className='flex gap-x-10 font-barlow text-sm text-white tracking-widest uppercase px-10'>
          <CustomLink name="home" path="/"/>
          <CustomLink name="destination" path="/destination"/>
          <CustomLink name="crew" path="/crew"/>
          <CustomLink name="technology" path="/technology"/>
        </ol>
      </div>
    </header>
  );
}

export default Header;
