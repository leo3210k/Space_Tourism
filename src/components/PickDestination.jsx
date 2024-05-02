import './PickDestination.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'

function PickDestination() {
  const DestinationsContent = function({ value, title, description, distance, travel_days }) {
    return (
      <TabsContent className='flex flex-col items-center gap-6' value={value}>
        <div className='flex flex-col items-center'>
          <h1 className='text-6xl md:text-7xl font-bellefair text-white'>{title}</h1>
          <span className='w-5/6 text-base md:text-lg text-tropical_blue font-barlow line-clamp-5 text-center mt-1'>
            {description}
          </span>
        </div>
        <hr className='w-11/12 border-bright_gray'/>
        <div className='flex flex-col items-center gap-2'>
          <span className='font-barlow text-sm text-tropical_blue tracking-widest'>AVG. DISTANCE</span>
          <span className='font-bellefair text-3xl text-white'>{distance}</span>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <span className='font-barlow text-sm text-tropical_blue tracking-widest'>EST. TRAVEL TIME</span>
          <span className='font-bellefair text-3xl text-white'>{travel_days}</span>
        </div>
      </TabsContent>
    )
  }

  return (
    <div className='flex flex-col justify-center items-center gap-6 mt-5'>
      <div className='flex md:self-start gap-4 text-base md:text-xl font-barlow tracking-widest md:ml-10'>
        <span className='font-bold text-white/25'>01</span>
        <span className='text-white uppercase'>pick your destination</span>
      </div>
      <Tabs defaultValue="moon" className="w-[400px] md:w-11/12 flex flex-col items-center text-white">
        <TabsContent value="moon"><img src={moon} className='w-40 h-40 md:w-72 md:h-72' alt="moon" /></TabsContent>
        <TabsContent value="mars"><img src={mars} className='w-40 h-40 md:w-72 md:h-72' alt="mars" /></TabsContent>
        <TabsContent value="europa"><img src={europa} className='w-40 h-40 md:w-72 md:h-72' alt="europa" /></TabsContent>
        <TabsContent value="titan"><img src={titan} className='w-40 h-40 md:w-72 md:h-72' alt="titan" /></TabsContent>
        <TabsList className="font-barlow my-6">
          <TabsTrigger value="moon">MOON</TabsTrigger>
          <TabsTrigger value="mars">MARS</TabsTrigger>
          <TabsTrigger value="europa">EUROPA</TabsTrigger>
          <TabsTrigger value="titan">TITAN</TabsTrigger>
        </TabsList>
        <DestinationsContent value="moon" title="MOON" description="
          See our planet as you’ve never seen it before. A perfect relaxing trip 
          away to help regain perspective and come back refreshed. While you’re there, 
          take in some history by visiting the Luna 2 and Apollo 11 landing sites."
          distance="384,400 KM"
          travel_days="3 DAYS"
          />
          <DestinationsContent value="mars" title="MARS" description="
          Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus 
          Mons, the tallest planetary mountain in our solar system. It’s two and a half 
          times the size of Everest!"
          distance="225 MIL. KM"
          travel_days="9 MONTHS"
          />
          <DestinationsContent value="europa" title="EUROPA" description="
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter 
          lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, 
          curling, hockey, or simple relaxation in your snug wintery cabin."
          distance="628 MIL. KM"
          travel_days="3 YEARS"
          />
          <DestinationsContent value="titan" title="TITAN" description="
          The only moon known to have a dense atmosphere other than Earth, Titan is a 
          home away from home (just a few hundred degrees colder!). As a bonus, you get 
          striking views of the Rings of Saturn."
          distance="1.6 BIL. KM"
          travel_days="7 YEARS"
          />
      </Tabs>
    </div>
  );
}

export default PickDestination;
