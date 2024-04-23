import './PickDestination.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

function PickDestination() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex gap-5'>
        <span className='text-2xl font-barlow font-bold text-dusty_gray tracking-widest opacity-50'>01</span>
        <span className='text-2xl font-barlow text-white uppercase tracking-widest'>pick your destination</span>
      </div>
      <Tabs defaultValue="account" className="w-[400px] flex flex-col items-center text-white">
        <TabsContent value="moon">Make changes to your moon here.</TabsContent>
        <TabsContent value="mars">Change your password here.</TabsContent>
        <TabsContent value="europa">Change your password here.</TabsContent>
        <TabsContent value="titan">Change your password here.</TabsContent>
        <TabsList className="font-barlow">
          <TabsTrigger value="moon">MOON</TabsTrigger>
          <TabsTrigger value="mars">MARS</TabsTrigger>
          <TabsTrigger value="europa">EUROPA</TabsTrigger>
          <TabsTrigger value="titan">TITAN</TabsTrigger>
        </TabsList>
        <TabsContent value="moon">Make changes to your moon here.</TabsContent>
        <TabsContent value="mars">Change your password here.</TabsContent>
        <TabsContent value="europa">Change your password here.</TabsContent>
        <TabsContent value="titan">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default PickDestination;
