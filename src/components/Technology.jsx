import './Technology.css';
import TechnologyCarousel from './utils/TechnologyCarousel';

function Technology() {
  const OPTIONS = { loop: true }

  const technologys = [
    {
      src_landscape: '/technology/image-space-capsule-landscape.jpg',
      src_portrait: '/technology/image-space-capsule-portrait.jpg',
      name: 'SPACE CAPSULE',
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    },
    {
      src_landscape: '/technology/image-spaceport-landscape.jpg',
      src_portrait: '/technology/image-spaceport-portrait.jpg',
      name: 'SPACEPORT',
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
      src_landscape: '/technology/image-launch-vehicle-landscape.jpg',
      src_portrait: '/technology/image-launch-vehicle-portrait.jpg',
      name: 'LAUNCH VEHICLE',
      description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    }
  ]

  return (
    <div className='flex flex-col justify-center items-center gap-6 md:gap-12 mt-5 md:mt-8 lg:mt-12 lg:ml-24'>
      <div className='flex md:self-start gap-4 text-base md:text-xl lg:text-3xl font-barlow tracking-widest md:ml-10 lg:ml-0'>
        <span className='font-bold text-white/25'>03</span>
        <span className='text-white uppercase'>SPACE LAUNCH 101</span>
      </div>
      <TechnologyCarousel slides={technologys} options={OPTIONS} />
    </div>
  );
}

export default Technology;
