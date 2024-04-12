import './Header.css';

import logo from '../assets/icons/logo.svg'
import hamburguer from '../assets/icons/icon-hamburger.svg'

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="logo" />
      <img src={hamburguer} alt="hamburguer" />
    </div>
  );
}

export default Header;
