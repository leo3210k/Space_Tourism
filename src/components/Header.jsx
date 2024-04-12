import './Header.css';

import logo from '../assets/icons/logo.svg'
import hamburguer from '../assets/icons/icon-hamburger.svg'

import Menu from './Menu';

function Header() {
  return (
    <header className="relative flex justify-between items-center p-10">
      <img src={logo} alt="logo" />
      <img src={hamburguer} alt="hamburguer" />
      <Menu />
    </header>
  );
}

export default Header;
