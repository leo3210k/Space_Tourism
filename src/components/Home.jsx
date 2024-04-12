import './Home.css';

import logo from '../assets/icons/logo.svg'
import hamburguer from '../assets/icons/icon-hamburger.svg'

function Home() {
  return (
    <div className="flex justify-between items-center p-10">
      <img src={logo} alt="logo" />
      <img src={hamburguer} alt="hamburguer" />
    </div>
  );
}

export default Home;
