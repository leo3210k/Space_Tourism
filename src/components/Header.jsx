import './Header.css';

import logo from '../assets/icons/logo.svg'
import hamburguer from '../assets/icons/icon-hamburger.svg'

function Header() {
  return (
    <header className="flex justify-between items-center p-10">
      <img src={logo} alt="logo" />
      <img src={hamburguer} alt="hamburguer" />
    </header>
  );
}

export default Header;
