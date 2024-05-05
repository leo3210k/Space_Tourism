import './Crew.css';
import CrewCarousel from './utils/CrewCarousel';

function Crew() {
  const OPTIONS = { loop: true }

  const crew = [
    {
      src: '/crew/image-douglas-hurley.png',
      title: 'Commander',
      name: 'Douglas Hurley',
      description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    },
    {
      src: '/crew/image-mark-shuttleworth.png',
      title: 'Mission Specialist ',
      name: 'Mark Shuttleworth',
      description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
    },
    {
      src: '/crew/image-victor-glover.png',
      title: 'Pilot',
      name: 'Victor Glover',
      description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an Fe was a crew member of Expedition 64, and served as a station systems flight engineer. '
    },
    {
      src: '/crew/image-anousheh-ansari.png',
      title: 'Flight Engineer',
      name: 'Anousheh Ansari',
      description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
    }
  ]

  return (
    <div className='flex flex-col justify-center items-center gap-6 md:gap-12 mt-5 md:mt-8 lg:mt-12'>
      <div className='flex md:self-start gap-4 text-base md:text-xl font-barlow tracking-widest md:ml-10'>
        <span className='font-bold text-white/25'>02</span>
        <span className='text-white uppercase'>meet your crew</span>
      </div>
      <CrewCarousel slides={crew} options={OPTIONS} />
    </div>
  );
}

export default Crew;
