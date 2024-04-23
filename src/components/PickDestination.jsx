import './PickDestination.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

function PickDestination() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex gap-5'>
        <span className='text-2xl font-barlow font-bold text-dusty_gray tracking-widest opacity-50'>01</span>
        <span className='text-2xl font-barlow text-white uppercase tracking-widest'>pick your destination</span>
      </div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default PickDestination;
