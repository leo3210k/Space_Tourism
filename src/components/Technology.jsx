import './Technology.css';
import TechnologyCarousel from './utils/TechnologyCarousel';

function Technology() {
  const OPTIONS = { loop: true }

  const technologys = [
    {
      src: '/technology/image-launch-vehicle-landscape.jpg',
      name: 'LAUNCH VEHICLE',
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
      src: '/technology/image-spaceport-landscape.jpg',
      name: 'SPACEPORT',
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      src: '/technology/image-space-capsule-landscape.jpg',
      name: 'SPACE CAPSULE',
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
  ]

  return (
    <div className='flex flex-col justify-center items-center gap-8 mt-5'>
      <div className='flex gap-4'>
        <span className='text-base font-barlow font-bold text-dusty_gray tracking-widest opacity-50'>03</span>
        <span className='text-base font-barlow text-white uppercase tracking-widest'>SPACE LAUNCH 101</span>
      </div>
      <TechnologyCarousel slides={technologys} options={OPTIONS} />
    </div>
  );
}

export default Technology;
