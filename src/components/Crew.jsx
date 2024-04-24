import './Crew.css';
import EmblaCarousel from './utils/EmblaCarousel';

import './utils/css/embla.css'

function Crew() {
  const OPTIONS = {}
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className='flex flex-col justify-center items-center gap-6 -mt-4'>
      <div className='flex gap-5'>
        <span className='text-2xl font-barlow font-bold text-dusty_gray tracking-widest opacity-50'>02</span>
        <span className='text-2xl font-barlow text-white uppercase tracking-widest'>meet your crew</span>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default Crew;
