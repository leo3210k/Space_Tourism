import { Link } from 'react-router-dom';
import './SideMenu.css';

function Menu({ isSideMenuOpen }) {
  return (
    <div className={`menu absolute top-0 right-0 ${isSideMenuOpen ? 'w-9/12' : 'w-0'} h-svh text-white backdrop-blur-2xl transition-all duration-700 z-20`}>
      <ol className="font-barlow flex flex-col gap-8 mt-40 ml-10">
        <Link to={"/"} className="flex gap-4 text-2xl font-light tracking-widest uppercase">
          <div className="font-bold">00</div>
          <span>home</span>
        </Link>
        <Link to={"/destination"} className="flex gap-4 text-2xl font-light tracking-widest uppercase">
          <div className="font-bold">01</div>
          <span>destination</span>
        </Link>
        <Link to={"/crew"} className="flex gap-4 text-2xl font-light tracking-widest uppercase">
          <div className="font-bold">02</div>
          <span>crew</span>
        </Link>
        <Link to={"/technology"} className="flex gap-4 text-2xl font-light tracking-widest uppercase">
          <div className="font-bold">03</div>
          <span>technology</span>
        </Link>
      </ol>
    </div>
  );
}

export default Menu;
