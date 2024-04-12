import './Home.css';

function Home() {
  return (
    <div className=" flex flex-col items-center mt-6">
      <span className="text-3xl font-barlow text-white uppercase tracking-widest">so, you want to travel to</span>
      <h1 className="text-9xl font-bellefair text-white uppercase mt-8">space</h1>
      <span className="w-4/6 text-lg text-white font-barlow line-clamp-5 text-center mt-6">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space 
        and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a 
        truly out of this world experience!
      </span>
      <div className="w-48 h-48 flex justify-center items-center text-xl text-vulcan bg-white rounded-full font-bellefair uppercase mt-24">
        explore
      </div>
    </div>
  );
}

export default Home;
