import './Header.css';

import logo from '../assets/icons/logo.svg'

import SideMenu from './SideMenu';
import CustomLink from './utils/CustomLink';
import { useState } from 'react';
import { MenuToggle } from './utils/MenuToggle';

function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between lg:pt-8">
      <img src={logo} className='ml-6 mt-6 md:ml-10 md:mt-0 lg:ml-14 self-center' alt="logo" />
      <hr className='hidden lg:block absolute w-6/12 border-white/40 top-[5.25rem] left-40'/>
      <MenuToggle isSideMenuOpen={isSideMenuOpen} toggle={() => setIsSideMenuOpen(!isSideMenuOpen)} />
      <SideMenu isSideMenuOpen={isSideMenuOpen}/>
      <div className='hidden relative lg:w-8/12 md:flex bg-dusty_gray/[.04] lg:backdrop-blur-2xl'>
        <hr className='hidden lg:block absolute w-1/12 border-white/40 top-1/2 end-auto'/>
        <ol className='flex gap-x-10 font-barlow text-sm lg:text-base text-white tracking-widest uppercase px-10 lg:pl-32'>
          <CustomLink name="home" path="/" number="00"/>
          <CustomLink name="destination" path="/destination" number="01"/>
          <CustomLink name="crew" path="/crew" number="02"/>
          <CustomLink name="technology" path="/technology" number="03"/>
        </ol>
      </div>
    </header>
  );
}

export default Header;
