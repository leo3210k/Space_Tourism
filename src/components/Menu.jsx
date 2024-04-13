import './Menu.css';

function Menu() {
  return (
    <div className="absolute top-0 right-0 w-7/12 h-svh text-white backdrop-blur-2xl z-20">
      <ol className="font-barlowX flex flex-col gap-8 mt-40 ml-10">
        <li className="flex gap-4 text-xl font-light tracking-widest uppercase">
          <div className="font-bold">00</div>
          <span>home</span>
        </li>
        <li className="flex gap-4 text-xl font-light tracking-widest uppercase">
          <div className="font-bold">01</div>
          <span>destination</span>
        </li>
        <li className="flex gap-4 text-xl font-light tracking-widest uppercase">
          <div className="font-bold">02</div>
          <span>crew</span>
        </li>
        <li className="flex gap-4 text-xl font-light tracking-widest uppercase">
          <div className="font-bold">03</div>
          <span>technology</span>
        </li>
      </ol>
    </div>
  );
}

export default Menu;
