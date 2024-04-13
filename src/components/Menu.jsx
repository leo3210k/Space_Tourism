import './Menu.css';

function Menu() {
  return (
    <div className="absolute flex flex-col top-0 right-0 w-7/12 h-svh text-white backdrop-blur-2xl z-20">
      <ol className="font-barlowX">
        <li className="flex gap-4 text-base uppercase">
          <div>00</div>
          <span>home</span>
        </li>
        <li className="flex gap-4 text-base uppercase">
          <div>01</div>
          <span>destination</span>
        </li>
        <li className="flex gap-4 text-base uppercase">
          <div>02</div>
          <span>crew</span>
        </li>
        <li className="flex gap-4 text-base uppercase">
          <div>03</div>
          <span>technology</span>
        </li>
      </ol>
    </div>
  );
}

export default Menu;
