import './Home.css';

function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-16 md:mt-24 lg:mt-[30vh]">
      <div className='flex flex-col items-center'>
        <span className="text-base md:text-xl lg:text-3xl font-barlow text-tropical_blue uppercase tracking-widest">so, you want to travel to</span>
        <h1 className="text-8xl md:text-[9.375rem] font-bellefair text-white uppercase mt-8">space</h1>
        <span className="w-5/6 md:w-3/6 text-base md:text-lg text-tropical_blue font-barlow line-clamp-5 text-center md:leading-7 mt-8 md:mt-6">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space 
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a 
          truly out of this world experience!
        </span>
      </div>
      <div className="relative group cursor-pointer mt-16 md:mt-36">
        <div className="absolute w-48 h-48 md:w-60 md:h-60 bg-dusty_gray opacity-20 rounded-full transition-all duration-1000 group-hover:scale-150 z-0"></div>
        <div className="relative w-48 h-48 md:w-60 md:h-60 flex justify-center items-center text-xl md:text-3xl font-bellefair text-vulcan bg-white rounded-full uppercase z-10">
          explore
        </div>
      </div>
    </div>
  );
}

export default Home;
