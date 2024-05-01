import './Home.css';

function Home() {
  return (
    <div className="flex flex-col items-center mt-16">
      <span className="text-base font-barlow text-tropical_blue uppercase tracking-widest">so, you want to travel to</span>
      <h1 className="text-8xl font-bellefair text-white uppercase mt-8">space</h1>
      <span className="w-5/6 text-base text-tropical_blue font-barlow line-clamp-5 text-center leading-7 mt-8">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space 
        and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a 
        truly out of this world experience!
      </span>
      <div className="relative group cursor-pointer mt-16">
        <div className="absolute w-48 h-48 bg-dusty_gray opacity-20 rounded-full transition-all duration-1000 group-hover:scale-150 z-0"></div>
        <div className="relative w-48 h-48 flex justify-center items-center text-xl text-vulcan bg-white rounded-full font-bellefair uppercase z-10">
          explore
        </div>
      </div>
    </div>
  );
}

export default Home;
