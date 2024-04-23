import './PickDestination.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'

function PickDestination() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex gap-5'>
        <span className='text-2xl font-barlow font-bold text-dusty_gray tracking-widest opacity-50'>01</span>
        <span className='text-2xl font-barlow text-white uppercase tracking-widest'>pick your destination</span>
      </div>
      <Tabs defaultValue="moon" className="w-[400px] flex flex-col items-center text-white">
        <TabsContent value="moon"><img src={moon} className='w-40 h-40' alt="" /></TabsContent>
        <TabsContent value="mars"><img src={mars} className='w-40 h-40' alt="" /></TabsContent>
        <TabsContent value="europa"><img src={europa} className='w-40 h-40' alt="" /></TabsContent>
        <TabsContent value="titan"><img src={titan} className='w-40 h-40' alt="" /></TabsContent>
        <TabsList className="font-barlow">
          <TabsTrigger value="moon">MOON</TabsTrigger>
          <TabsTrigger value="mars">MARS</TabsTrigger>
          <TabsTrigger value="europa">EUROPA</TabsTrigger>
          <TabsTrigger value="titan">TITAN</TabsTrigger>
        </TabsList>
        <TabsContent value="moon">Oláaaaaaaaaaaaaaaaaaaaaaaaaa</TabsContent>
        <TabsContent value="mars"></TabsContent>
        <TabsContent value="europa"></TabsContent>
        <TabsContent value="titan"></TabsContent>
      </Tabs>
    </div>
  );
}

export default PickDestination;
