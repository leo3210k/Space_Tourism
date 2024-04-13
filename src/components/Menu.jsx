import './Menu.css';

function Menu() {
  return (
    <div className="absolute flex flex-col top-0 right-0 w-7/12 h-svh text-white backdrop-blur-2xl z-20">
      <ol>
        <li>
          <div>00</div>
          <span>home</span>
        </li>
        <li>
          <div>01</div>
          <span>destination</span>
        </li>
        <li>
          <div>02</div>
          <span>crew</span>
        </li>
        <li>
          <div>03</div>
          <span>technology</span>
        </li>
      </ol>
    </div>
  );
}

export default Menu;
